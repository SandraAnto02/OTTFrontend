import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../module/users';
import { Observable } from 'rxjs';
import { CheckCustomer } from '../module/CheckCustomer';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  url : string = 'http://localhost:8585/customer';
  loginForm: any;

  constructor(private httpClient : HttpClient) 
  { }

  registerUser(user: Users) 
  { 
    return this.httpClient.post(this.url+"/add" ,user); 
  }

  getAllUsers()
  {
    return this.httpClient.get(this.url+"/viewusers");
  }

  gettt(data:any):Observable<any>
  {
    return this.httpClient.post<any>(this.url+'/checkcustomer',data)
  }

  userdetailphone(phone:string)
  {

    return this.httpClient.get(`${this.url}/${phone}`)

  }

 

generateOtp(phoneNumber:string)

  {
    // const body={phoneNumber}
    console.log('this is from the generate otp user service');
    
    this.httpClient.post(this.url+"/requestotp",phoneNumber).subscribe()
    // console.log(phoneNumber);

  }

  
  validateOtp(otp:string) 
  {
    console.log('this validation is from the generate otp user service');
    return this.httpClient.post<CheckCustomer>(this.url+"/validateotp",otp);
  }


//-----------------------linked account------------------------------------

linkAccount(linkedAccount:any)
{
  console.log('this linking is from userservice');
  
  return this.httpClient.post(this.url+"/linkaccounts",linkedAccount)

}


linkAccountView(userid:any)
  {
    return this.httpClient.get(`${this.url}/viewlinkaccounts/${userid}`);
  }

//----------------------CSV---------------------------------------------------

//to send csv data
getCsv()
{
  return this.httpClient.get('http://localhost:8585/csv/data',{ responseType:'text'})
}


getInvoices()
{
  return this.httpClient.get<any>('http://localhost:8585/csv/data');
}
  
}

