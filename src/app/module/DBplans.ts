export class DBplans
{
    cusplanid:number;
	userid:number;
	planid:number;
	price:string;
	activationdate:Date;
	expirydate:Date;

    constructor(cusplanid:number, userid:number, planid:number,price:string,activationdate:Date,expirydate:Date)
    {
        this.cusplanid=cusplanid
        this.userid=userid
        this.planid=planid
        this.price=price
        this.activationdate=activationdate
        this.expirydate=expirydate
    }
}