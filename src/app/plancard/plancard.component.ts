import { Component, OnInit } from '@angular/core';
import { PlancardService } from '../service/plancard.service';
import { DBplans } from '../module/DBplans';
import { timer } from 'rxjs';

@Component({
  selector: 'app-plancard',
  templateUrl: './plancard.component.html',
  styleUrls: ['./plancard.component.css']
})
export class PlancardComponent implements OnInit
{
  userAccount: any;
  userPlans: DBplans[]=[];

  constructor(private plancardservice:PlancardService)
  {
    
  }
  ngOnInit(): void 
  {
    console.log("msg from plancard comp ngoninit");
    
    const localdata = localStorage.getItem("data");
      if(localdata)
      {
        this.userAccount = JSON.parse(localdata);
        console.log(this.userAccount);
      }

      this.plancardservice.getCusPlanById(this.userAccount.userid).subscribe(
        (res) => {
          timer(100).subscribe(()=>{
            console.log(this.userPlans);
            this.userPlans = res;
          })
         
          
        }
        
      )
    
  }



}
