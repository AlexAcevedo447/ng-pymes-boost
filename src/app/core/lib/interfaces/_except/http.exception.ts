//Here you can write possible exceptions that could be thrown in our system

interface Exception{
    name:string,
    message:string
}

export class LoginError implements Exception{
    message: string;
    name:string;
    constructor(name:string, message:string){
        this.name = name;
        this.message = message;
    }
}