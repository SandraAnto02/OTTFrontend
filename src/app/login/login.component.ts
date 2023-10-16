import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../module/users';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Status } from '../status/Status';
import { UserService } from '../service/user.service';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{

  usr: Users;
  showSuccessMessage = false;  
  phone:FormControl;
  loginForm:FormGroup;
  checkmsg:any;
  
  userPhoneControl = new FormControl();

  constructor(private route: Router,private http: HttpClient,public service:UserService)
  { 
    this.usr= new Users('','','','');
    this.phone=new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('[1-9][0-9]{9}$')]);
    this.loginForm = new FormGroup({
      phone:this.phone,
    })
    console.log(this.inputText);

   
    
  }

//-------------Displaying details of user in home page-------------  

data:any;

submitForm()
{
  console.log(this.inputText);
  this.service.userdetailphone(this.inputText).subscribe((data)=>{console.log(data);
  localStorage.setItem("data",JSON.stringify(data));
  });
  
  
}


 //--------------------OTP box configuration-------------------- 

  formData: { mobile: string, enteredOtp:String } = { mobile: '',enteredOtp:'' };
  title = 'otp-app';

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between',
    allowNumbersOnly: true
  }
  
//---------------------generating OTP by sending the number------------------------- 
  
  otp1=false

  otpPage()
  {
    this.otp1=true;
    console.log(this.phone.value);
    this.service.generateOtp(this.phone.value);    
  }


// --------------OTP validation and routing to respective pages--------------------
  
validateOtp()
  {
    console.log("from the validate otp");

    console.log(this.otp); 
    const enteredOtp = this.otp;
    this.service.validateOtp(this.otp).subscribe((msg)=>{
      
      this.checkmsg=msg;
      
      
      timer(500).subscribe(()=>{
        console.log("from the validate otp funciton"+this.checkmsg.checkcustomer);
      
      if (this.checkmsg.checkCustomer === 'validated')
      {
        console.log(this.inputText+'  this it the mobile of user');
        
        console.log('user validated');
        if (this.inputText==='7990318415'){
          Swal.fire(
            'You are Logged in Successfully',
            '',
            'success'
          )
          this.route.navigate(['/admin']);
        }
        else{
          Swal.fire(
            'You are Logged in Successfully',
            '',
            'success')
            this.route.navigate(['/userpage'])

        }
        
        // this.otpValidated = true; // OTP has been validated successfully
      } 
      else 
      {
        console.log('wrong otp');
        Swal.fire({
          icon:'error',
          title:'Wrong OTP Yaar',
          text:'Enter correct OTP',
          footer:'Back to login'
        })
        // this.otpValidated = false; // OTP validation failed
      }
      })
      
    
    });

    timer(2000).subscribe(()=>{
      console.log(this.checkmsg.checkcustomer);
      
    })

  

  }
  

//------------------OTP text box-----------------------------------  
  onOtpChange(event: any) 
  {
    this.otp = event;
    if(this.otp.length < this.configOptions.length)
    {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) 
    {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn-primary';
    }
  }

 //------seperating admin and user no. and redirecting them to respective pages (without OTP)------- 
  
 validateNumber(): void 
  {
    const phoneNumber = this.formData.mobile;
    console.log(phoneNumber);
    if(phoneNumber == '7990318415')
    {
      this.route.navigate(['/admin']);
    }

    else 
    {
      this.route.navigate(['/userpage']);
    }
  }


  phoneNumberFormControl = new FormControl();
  inputText: string = '';
  errorText = "";
  phoneNumberError = false;
  isPhoneNumberInDatabase: boolean = false;

//-------------only displaying entered no. in the field-----------------------------  
  
  logInputText() 
  {
    // Log the inputText value to the console
    if(this.inputText.length==10)
    {
    console.log(this.inputText);
    console.log("hi");
    
    }
  }

//---------------------- Checking number in database while logging------------------------

  phoneNumberStatus: Status|undefined;
  isPostpaid: boolean = false; // Flag for postpaid status
  
  maya:boolean = false;


  checkPhoneNumberInDatabase() 
  {
    if (this.inputText.length == 10) 
    {
      const data = {'number':this.inputText}
      this.service.gettt(data).subscribe(
        res=>{
          console.log(res)
          if(res.checkCustomer =='DOES NOT EXIST')
          {
            this.maya = true
          }
        }
      );
    }
  }
  
  

}
