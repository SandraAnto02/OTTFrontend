import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent 
{
customerList:any;

  constructor(private userService: UserService)
  {
    this.userService.getAllUsers().subscribe((users) => { this.customerList = users;} );
  }

}
