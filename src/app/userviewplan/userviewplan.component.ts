import { Component } from '@angular/core';
import { PlancardService } from '../service/plancard.service';

@Component({
  selector: 'app-userviewplan',
  templateUrl: './userviewplan.component.html',
  styleUrls: ['./userviewplan.component.css']
})
export class UserviewplanComponent
{
  planCardList:any

  constructor(private cardPlanService:PlancardService)
  {

  }

  ngOnInit()
  {
    this.cardPlanService.getAllPlans().subscribe(
      (list)=>{
        this.planCardList=list;
      },
      (error)=>{
        console.error('Error in fetching:', error);
      }
    )
  }

}
