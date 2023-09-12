export   interface RequestInterface{
    code:number,
    data:string,
    result:object[]
}

export interface OrderDetail{
    cebInvtHead:{
        buyerName:string,
        consigneeAddress:string,
        logisticsNo:string,
        buyerIdNumber:string,
        buyerTelephone:string,
        invtNo:string
    }
    
}


 //可能被修改被用到得变量 buyerName=订购人  consigneeAddress=地址  logisticsNo=物流号 buyerIdNumber=身份证 
    //appStatusText=业务状态  buyerTelephone=订购人电话 currencyText = 商品数组，数量可能不止一个
    let objectArr = ['buyerName','consigneeAddress','logisticsNo','buyerIdNumber','buyerTelephone'];

export const constObject = {
    formCondition:(id)=>{
        return  "{\"invtNo\":\ "+id+"\,\"sysDateFrom\":\"2023-09-01 00:00:00\",\"sysDateTo\":\"2023-09-07 23:59:59\",\"appStatus\":\"0\",\"appStatusText\":\"全部\",\"tradeMode\":\"0\",\"tradeModeText\":\"全部\",\"collStatus\":\"0\",\"collStatusText\":\"全部\",\"taxInfoStatus\":\"0\",\"taxInfoStatusText\":\"全部\"}"
    },//海关列表接口form表单参数
    headers:{ 'Cookie': "sw_lang=0; routeuser=020fb762cf51e04f4216853f7e767ee5; route1plat=f9bd921b61b166eaac9cbb2290b8aa1d; JSESSIONID=74d246c0-e79e-46ca-908b-c5bbeef14fed" },//请求海关接口的cookie
    listUrl:'https://swapp.singlewindow.cn/swceb2web//inventory/inventoryQuery',//海关请求列表url
    detailUrl:"https://swapp.singlewindow.cn/swceb2web//inventory/inventoryDetailQuery",//请求海关详情接口的url
    fileIndex:[9,10],//需要修改的列数数组
    replaceArr:['buyerName','consigneeAddress'],//跟修改数组对应的变量名，长度顺序都要对应
}