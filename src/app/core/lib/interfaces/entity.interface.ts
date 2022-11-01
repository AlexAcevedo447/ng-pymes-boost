//Here you can add possible interfaces that could represent a model within this app
export interface successAuth{
    token:string,
    roles:Array<string>
}
export interface User{
    email:string,
    password:string
}