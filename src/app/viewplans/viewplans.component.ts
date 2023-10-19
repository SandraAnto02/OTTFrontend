import { Component } from '@angular/core';
import { PlancardService } from '../service/plancard.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewplans',
  templateUrl: './viewplans.component.html',
  styleUrls: ['./viewplans.component.css']
})
export class ViewplansComponent 
{
  planCardList:any
  isLoggedIn: any;

  constructor(private cardPlanService:PlancardService,private route: Router)
  {

  }

  ngOnInit()
  {
    this.cardPlanService.getAllPlans().subscribe(
      (list)=>{
        console.log(list);
        
        this.planCardList=list;
      },
      (error)=>{
        console.error('Error in fetching:', error);
      }
    )
  }

//---------sweet alert for redirecting to log in from view plans when user not logged in----------  
 
buyPlan(planId: number)
  {
    if (!this.isLoggedIn) 
    { // Replace this with your actual login check logic
      Swal.fire({
        title: 'Please Login',
        text: 'You need to log in to buy postpaid plans.',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Login',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect the user to the login page
          this.route.navigate(['/login']);
        }
      });
    } 
    else 
    {
      // Handle the logic for buying the plan
    }
  } 

}
