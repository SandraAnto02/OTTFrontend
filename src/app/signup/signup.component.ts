import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../module/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
{
  usr: Users;
  showSuccessMessage = false; 
  add: Users = new Users('', '', '','');
  submitted = false;
  inputText: any;

  constructor(private userService:UserService)
  {
    this.usr= new Users('','','','');
  }
  
  onSignUp() {
    
    console.log('Form Data:', this.usr);
    this.showSuccessMessage = true;

    console.log('Registering user into database...');
    this. userService.registerUser(this.usr).subscribe((response) => {this.submitted = true; });


    // Reset the form after submission (optional)
    // this.resetForm();
  }

  // Helper function to reset the form
  // resetForm() {
  //   this.formData = {}; // Reset the form data to empty values
  // }

  exist:boolean = false;

  checkPhoneNumberInDatabase() 
  {
    console.log("entered into checknum");
    
    if (this.inputText.length == 10) 
    {
      const data = {'number':this.inputText}
      this.userService.gettt(data).subscribe(
        res=>{
          console.log(res)
          if(res.checkCustomer =='EXIST')
          {
            this.exist = true
          }
        }
      );
    }
  }

}

