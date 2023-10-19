import { Component } from '@angular/core';
import { PlancardService } from '../service/plancard.service';
import { CustomerPlan } from '../module/customerplan';

@Component({
  selector: 'app-userviewplan',
  templateUrl: './userviewplan.component.html',
  styleUrls: ['./userviewplan.component.css']
})
export class UserviewplanComponent
{
  planCardList:any
  receivedData: any;

  constructor(private cardPlanService:PlancardService)
  {

  }

//-------------------user By Plan and displaying it on the my plans-----------------------

userPlans:CustomerPlan=new CustomerPlan(0,0,'')

//post
choosedPlan(plan:any)
{
  const userid=this.receivedData.userid;
  const planid = plan.planid;
  const price = plan.price;

  const userPlans ={
    userid:userid,
    planid:planid,
    price:price

  };

  this.cardPlanService.setCusPlan(userPlans).subscribe(
    (response)=>{
      console.log(response);
      console.log(1);
  
    },

  );

}
  ngOnInit()
  {
    this.cardPlanService.getAllPlans().subscribe(
      (list)=>{
        localStorage.setItem("plans",JSON.stringify(list))
        this.planCardList=list;

      },
      (error)=>{
        console.error('Error in fetching:', error);
      }
    )
    this.planCardList = localStorage.getItem("plans");
    const localdata = localStorage.getItem("data");
      if(localdata)
      {
        this.receivedData = JSON.parse(localdata);
        console.log(this.receivedData);
        
      }
  }

}
