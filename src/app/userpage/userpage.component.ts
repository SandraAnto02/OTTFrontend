import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../module/users';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { LinkedMembersData } from './linkedmembersdata';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent 
{
  formData: { mobile: string } = { mobile: '' };
  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";
  userdetails:any;
  receivedData:any;
  linked:LinkedMembersData;
  
  linkedphone:FormControl;
  linkedname:FormControl;
  linkedemail:FormControl;
  checkmsg: any;
  

//-------------------------------Constructor-----------------------------------------------

  constructor(private userService: UserService, private route: Router)
  {
    this.userService.getAllUsers().subscribe((users) => { this.userdetails = users;} );
    console.log(this.userdetails);

    this.linked= new LinkedMembersData('','','');
    this.linkedname=new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')])
    this.linkedemail=new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')])
    this.linkedphone=new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('[1-9][0-9]{9}$')]);
   
    this.loginForm = new FormGroup({
      linkedname:this.linkedname,
      linkedemail:this.linkedemail,
      linkedphone:this.linkedphone,

    })
    console.log(this.inputText);
    
  }

//-----------------------------OTP text box--------------------------------------------

  public configOptions = 
  {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between',
    allowNumbersOnly: true
  }
  
  ngOnInit() 
  {
      const localdata = localStorage.getItem("data");
      if(localdata)
      {
        this.receivedData = JSON.parse(localdata);
      }
  }

//--------------------------generating otp--------------------------

  otp1=false
  otpPage()
  {
    this.otp1=true;
    console.log(this.linkedphone.value);
    this.userService.generateOtp(this.linkedphone.value);    
  }

//------------------------OTP text box----------------------------------  

  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Link";
      this.btnStatus = 'btn-primary';
    }
  }

//-------------------------Linking account box------------------------------

  link=false;
  linkAccount()
  {
    this.link=true
  }

  inputText: string = '';
  maya:boolean = false;
  loginForm:FormGroup;

//---------------------------checking number in database-----------------
  
  checkPhoneNumberInDatabase() 
  {
    if (this.inputText.length == 10) 
    {
      const data = {'number':this.inputText}
      this.userService.gettt(data).subscribe(
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
//--------------------linking account-----------------------------
linkedData: LinkedMembersData=new LinkedMembersData("","","")  
linkedAccount: LinkedMembersData[]=[]  //getting this in list from the spring 
newLinkedAccount={
  userid:'',                           //this is from springboot dto class userid
  linkedAccount: this.linkedAccount    //this is from springboot dto class (list from linked account pojo)


}

submitForm()
  {
    console.log("came to userpage submitform");
    
    this.newLinkedAccount.userid=this.receivedData.userid;
    this.newLinkedAccount.linkedAccount.push(this.linkedData)
    this.userService.linkAccount(this.newLinkedAccount).subscribe((response) =>{
      console.log("linked account",response);
      Swal.fire(
        'Account Linked Successfully',
        '',
        'success'
      )
      
    },(error)=>{
      Swal.fire({
        icon:'error',
        title:'Failed to link',
        text:'Enter correct OTP',
        footer:'Back to login'
      })
    }
    
    )

  }

//----------------------------validating OTP-----------------------

  validateOtp()
  {
    console.log("from the validate otp");

    console.log(this.otp); 
    const enteredOtp = this.otp;
    this.userService.validateOtp(this.otp).subscribe((msg)=>{
      
      this.checkmsg=msg;
      
      
      timer(500).subscribe(()=>{
        console.log("from the validate otp funciton"+this.checkmsg.checkcustomer);
      
      if (this.checkmsg.checkCustomer === 'validated')
      {
        console.log(this.inputText+'  this it the mobile of user');
        
        console.log('user validated');
        if (this.inputText==='7990318415'){
          Swal.fire(
            'Account Linked Successfully',
            '',
            'success'
          )
        }
        else{
          Swal.fire(
            'Account linked Successfully',
            '',
            'success')

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



}
