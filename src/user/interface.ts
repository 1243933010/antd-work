export  interface LogoBody{
    autoLogin:boolean,
    password:string,
    type:string,
    username:string
}


export interface TokenData{
    user:{
        username:string,
        id:number
    }
}