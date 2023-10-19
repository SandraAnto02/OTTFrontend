export class CustomerPlan
{
    userid: number;
    planid: number;
    price: string;

    public constructor(userid:number, planid:number,price:string)
    {
        this.userid = userid
        this.planid = planid
        this.price = price
    }

}