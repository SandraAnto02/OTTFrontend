import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-linkaccountview',
  templateUrl: './linkaccountview.component.html',
  styleUrls: ['./linkaccountview.component.css']
})
export class LinkaccountviewComponent 
{
  linkedLAccountList:any;
  user:any;
  AllMembers: any;

  constructor(public service:UserService)
  {

  }

  ngOnInit(): void {
    console.log(1);
    
    const storedData = localStorage.getItem("data");
    if (storedData) {
      this.AllMembers = JSON.parse(storedData);
      console.log(2);
      

      this.service.linkAccountView(this.AllMembers.userid).subscribe(
        (response) => {
          this.user = response;
          console.log('User Details:', this.user);
        },
        (error) => {
          console.error('hello');
        }
      );
  }
}


}
