import { UserService } from "../service/user.service";

export class LinkedMembersData
{
    linkedname:string
    linkedphone:string
    linkedemail:string
    
    

    public constructor(linkedname:string, linkedphone:string, linkedmail:string, )
    {
        this.linkedname=linkedname
        this.linkedphone=linkedphone
        this.linkedemail=linkedmail

        
    }

}