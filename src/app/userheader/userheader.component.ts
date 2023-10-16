import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent 
{

  constructor(private router:Router)
  {
    
  }
  logout()
  {
    localStorage.removeItem("data");
    this.router.navigate(['/home'])
  }

}
