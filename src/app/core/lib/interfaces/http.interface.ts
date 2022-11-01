//Here you can add possible interfaces that could represent a data exchange between this app and an API or its similar

import { successAuth } from "./entity.interface"

export interface got{
    success:boolean,
    message:string
}

export interface successPermission extends got{
    data:successAuth
}

