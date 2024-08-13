import { Injectable } from '@nestjs/common';
import { CreateMateriallibraryDto } from './dto/create-materiallibrary.dto';
import { UpdateMateriallibraryDto } from './dto/update-materiallibrary.dto';
import { PrismaService } from '../prismaInt/prismaInt.service';
import { extname, join } from 'path'
import axios from 'axios';

import { RequestInterface, OrderDetail, constObject } from './interfaceFrom'
import { loadMenuTypeStr } from 'src/common/cryto';
const XlsxPopulate = require('xlsx-populate');

@Injectable()
export class MateriallibraryService {
  constructor(private prisma: PrismaService) { }
  async create(createMateriallibraryDto: CreateMateriallibraryDto) {
    let data = [];
    createMateriallibraryDto.fileList.forEach(element => {
      data.push({ url: element.replace(process.env.UPLOAD_URL, ''), classificationId: createMateriallibraryDto.labelId })
    });
    let result = await this.prisma.materialLibrary.createMany({
      data
    })
    return result;
  }


  async findAll(query) {
    console.log(query)
    let { pageSize, current, materialLibrary } = query;
    let skip = 0;
    if(pageSize&&current){
       skip = pageSize * (current - 1);
    }
    let whereObj = { classificationId: undefined };
    if (materialLibrary) {
      whereObj.classificationId = +materialLibrary;
    }
    let manyObj:any= {
      where: whereObj,
      select: {
        id: true,
        url: true,
        classificationId: true
      }
    }
    console.log(skip,pageSize,current)
    if(pageSize>0){
      manyObj.skip = skip;
      manyObj.take=+pageSize;
    }
    let result = await this.prisma.materialLibrary.findMany(manyObj)
    // result.forEach(val => {
    //   val.url = process.env.UPLOAD_URL + val.url;
    // })
    let total = await this.prisma.materialLibrary.count({
      where: whereObj,
    })
    return { total, list: result };
  }

  async findOne(id: number) {
    return `This action returns a #${id} materiallibrary`;
  }

  update(id: number, updateMateriallibraryDto: UpdateMateriallibraryDto) {
    return `This action updates a #${id} materiallibrary`;
  }

  async remove(id: number) {
    let result = await this.prisma.materialLibrary.delete({
      where: {
        id
      }
    })
    if (result) {
      return { code: 0, message: '删除成功' }
    }
    return {}
  }

  async getLabel() {
    let data = await this.prisma.materialLibraryClassification.findMany();
    return data
  }

  async createLabel(body) {
    // let {materialLibrary } = body;
    console.log(body)
    let data = await this.prisma.materialLibraryClassification.create({
      data: { label: body.materialLibrary }
    })
    return data
  }

  async upload(file: { filename: string }) {
    console.log(process.env.UPLOAD_URL, '---')
    // return { url: `${process.env.UPLOAD_URL}/images/${file.filename}` }
    return { url: `/images/${file.filename}` }

  }


  async getXlsxData(file) {   //接口执行起点，接收xlsx内部数组，创建XlsxPopulate,循环请求海关接口
    let dataList: { list: object[], cellIndex: number, workbook: any } = await this.getXlsxList(file);

    let workbook = await XlsxPopulate.fromFileAsync(join(__dirname, `./../../src/images/${file.filename}`));  //先提前创建XlsxPopulate传递进去
    for (let i = 0; i < dataList.list.length; i++) {  //循环数组开始请求海关接口
      let data = await this.requestCustoms(dataList.list[i])   //拿到海关详情数据，后期可以把数据放在某个文件里面方便筛选
      // console.log(data,'1111')
      if (data) {
        await this.updateXlsx(workbook, data, dataList.list, dataList.cellIndex)
      }
    }
    // console.log('11111')
    workbook.toFileAsync(join(__dirname, `./../../src/images/new${file.filename}`))  //循环操作完xlsx之后根据文件名称，新创建个文件
    return { list: dataList.list };
    //  return {data:{fileName:`${process.env.UPLOAD_URL}/images/${file.filename}`,list:data}};

  }


  async updateXlsx(workbook: any, detail: OrderDetail, list: object[], cellIndex: number) {  //根据传递详情数据修改对应的行，根据配置字段修改对应列

    const sheet = workbook.sheet(0); // 获取第一个工作表

    // 获取数据范围的值
    // const usedRangeValues = sheet.usedRange().value();
    // 获取数据行的数据
    // const dataRows = usedRangeValues.slice(cellIndex+2); // 跳过标题行,(键名行以及索引)=2
    // console.log(detail)
    for (let i = 0; i < list.length; i++) {
      let id = list[i]['清单'] || list[i]['清单号'];

      if (id == detail.cebInvtHead.invtNo) {   //根据索引找到需要修改的行数
        constObject.fileIndex.forEach((val, ind) => {  //循环配置数组，修改列数
          console.log(i + cellIndex + 2, constObject.replaceArr[ind], detail.cebInvtHead[constObject.replaceArr[ind]])
          sheet.row(i + cellIndex + 2).cell(val).value(detail.cebInvtHead[constObject.replaceArr[ind]]);
        })
      }
    }
  }

  async test() {
    let result = await axios.post('https://swapp.singlewindow.cn/swceb2web//inventory/inventoryQuery',

      {
        formCondition: "{\"invtNo\":\"53522023I010992874\",\"sysDateFrom\":\"2023-09-01 00:00:00\",\"sysDateTo\":\"2023-09-07 23:59:59\",\"appStatus\":\"0\",\"appStatusText\":\"全部\",\"tradeMode\":\"0\",\"tradeModeText\":\"全部\",\"collStatus\":\"0\",\"collStatusText\":\"全部\",\"taxInfoStatus\":\"0\",\"taxInfoStatusText\":\"全部\"}",
        limit: 50,
        offset: 0,
        order: "asc",
        queryArea: "QUERY"
      }, { headers: { 'Cookie': "sw_lang=0; routeuser=020fb762cf51e04f4216853f7e767ee5; route1plat=f9bd921b61b166eaac9cbb2290b8aa1d; JSESSIONID=b9a9e984-b0f7-4bb2-9271-746cc9f9b16c" } })
    console.log(result.data,)
    console.log(loadMenuTypeStr(result.data))

    return { code: 0, messag: '' }
  }


  async requestCustomsDetail(headGuid: string) {   //请求海关详情接口
    try {

      let result: RequestInterface = await axios.post(constObject.detailUrl,
        {
          guid: headGuid
        }, { headers: constObject.headers })

      let data: any = loadMenuTypeStr(result.data);
      console.log(data)
     let regData =  this.regDetailMsg(data);
      // data = JSON.parse(data);

      if (regData.code == '0') {
        // console.log(JSON.stringify(data.result),22222)
        return regData.result;
      }
    } catch (error) {
      console.log('222')
      console.log(error)
    }
  }


  async requestCustoms(obj: any) {   //请求海关接口，每次使用需要手动修改sysDateFrom、sysDateTo以及headers参数
    try {
      let id = obj['清单'] || obj['清单号'];
      let result: RequestInterface = await axios.post(constObject.listUrl,
        {
          formCondition: constObject.formCondition(id),
          limit: 50,
          offset: 0,
          order: "asc",
          queryArea: "QUERY"
        }, { headers: constObject.headers })
      // console.log(result,)
      let data: any = loadMenuTypeStr(result.data);

      // data = JSON.parse(data);
      console.log(data)
      let regData = this.regMsg(data)
      console.log(regData)

      if (regData.code == 30000) {
        if (regData.listLen == 1) {
          let detailData = await this.requestCustomsDetail(regData.headGuid)
          return detailData;
        }
      }
    } catch (error) {
      console.log('111')
      console.log(error)
      return false
    }
  }

  async getXlsxList(file) {  //获取xlsx里面得所有数据整合成一个数组
    // console.log(file, '====')
    let workbook = await XlsxPopulate.fromFileAsync(file.path);
    const sheet = workbook.sheet(0); // 获取第一个工作表

    // 获取数据范围的值
    const usedRangeValues = sheet.usedRange().value();

    let sliceIndex = 0;
    let length = usedRangeValues[0].filter((val) => val).length;
    if (length < 5) {
      sliceIndex = 1;
    }
    // 获取数据行的数据
    const dataRows = usedRangeValues.slice(sliceIndex); // 跳过标题行
    const data = [];

    let columKey = [];
    dataRows[0].forEach(val => {
      columKey.push(val);
    })

    // 遍历每一行的数据，创建对象并添加到数据数组中
    for (let i = 1; i < dataRows.length; i++) {
      const obj = {};
      for (let j = 0; j < dataRows[i].length; j++) {
        // const fieldName = 'Column ' + (j + 1);
        if (dataRows[i][0]) {
          obj[columKey[j]] = dataRows[i][j];
        } else {
          break
        }

      }
      if (Object.keys(obj).length > 0) {
        data.push(obj);
      }
    }
    // console.log(data)
    return { list: data, cellIndex: sliceIndex, workbook };
  }

  regDetailMsg(str) {    //正则处理详情返回指定一些数据，隔离异常字符
    function matchValue(reg, str) {
      var match = str.match(reg);
      return match && match[1];
    }

    var codeValue = matchValue(/"code":"(\d+)"/, str);
    var buyerName = matchValue(/"buyerName":"([^"]+)"/, str);
    // var cebInvtLists = matchValue(/"cebInvtLists":"([^"]+)"/, str);
    var consigneeAddress = matchValue(/"consigneeAddress":"([^"]+)"/, str);
    var logisticsNo = matchValue(/"logisticsNo":"([^"]+)"/, str);
    var buyerIdNumber = matchValue(/"buyerIdNumber":"([^"]+)"/, str);
    var buyerTelephone = matchValue(/"buyerTelephone":"([^"]+)"/, str);
    var appStatusText = matchValue(/"appStatusText":"([^"]+)"/, str);
    var invtNo = matchValue(/"invtNo":"([^"]+)"/, str);
    const regex = /"cebInvtLists":\[(.*?)\]/;
    const match = str.match(regex);
    const cebInvtListsString = match[1];
    const cebInvtLists = JSON.parse(`[${cebInvtListsString}]`);
    // console.log(cebInvtLists, '}}}', codeValue, appStatusText)
    return { code: codeValue, result: { cebInvtHead: { buyerName, consigneeAddress, logisticsNo, buyerIdNumber, buyerTelephone, appStatusText,invtNo }, cebInvtLists } };
  }
  regMsg(str) {   //正则处理列表返回数据，隔离异常字符
    // 提取 code 的值
    var codeRegex = /"code":"(\d+)"/;
    var codeMatch = str.match(codeRegex);
    var codeValue = codeMatch[1]; // "30000"

    // 提取 result 中第一次出现的 appStatusText 的值
    var appStatusRegex = /"appStatusText":"([^"]+)"/;
    var appStatusMatch = str.match(appStatusRegex);
    var appStatusValue = appStatusMatch[1]; // "放行"

    // 提取 result 中第一次出现的 headGuid 的值
    var headGuidRegex = /"headGuid":"([^"]+)"/;
    var headGuidMatch = str.match(headGuidRegex);
    var headGuidValue = headGuidMatch[1]; // "8c41d525-22b6-4b13-8165-0cc43cb06628"

    // var resultRegex = /"result":\[(.*?)\]/;
    // var resultMatch = str.match(resultRegex);
    // var resultString = resultMatch[1]; // 提取result数组的部分字符串

    // var resultArray = JSON.parse("[" + resultString + "]"); // 转换为数组格式
    // var resultCount = resultArray.length; // 获取result数组中对象的数量
    const startIndex = str.indexOf('"result":[') + 10;
    const endIndex = str.lastIndexOf(']');
    const resultString = str.substring(startIndex, endIndex);
    const resultArray = resultString.length > 0 ? resultString.split('},{') : [];
    const resultLength = resultArray.length;

    // console.log(resultCount); // 结果的数量
    return { code: codeValue, headGuid: headGuidValue, listLen: resultLength }
  }
}
