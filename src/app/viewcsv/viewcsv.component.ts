import { Component } from '@angular/core';
import { Csv } from '../module/users';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewcsv',
  templateUrl: './viewcsv.component.html',
  styleUrls: ['./viewcsv.component.css']
})
export class ViewcsvComponent 
{
  csvData: String='';
  parsedCsvData: string[][]=[];
  myCsv:Csv|undefined
  invoiceData:any=[];

  constructor(private service:UserService, private http:HttpClient)
  {

  }

  private parseCsvData(): void
  {
    if(this.csvData){
      this.parsedCsvData=this.csvData.split('\n').map(row => row.split('|').map(cell => cell.trim()));
    }
  }

  ngOnInit():void
  {
    this.service.getInvoices().subscribe(
      (data:any)=>{
        this.invoiceData=data;
        console.log(this.invoiceData[1]);
        
      },
      (error)=>{
        console.log('Error fetching',error);
        
      }
    )
  }


  sendEmail(
    email: string,
    username: string,
    price: string,
    activation_date: string,
    expiry_date: string,
    planname: string,
    phone: string
  ): void {
    // Create an object with the data you want to send to the backend
    const emailData = {
      email: email,
      username: username,
      price: price,
      activation_date: activation_date,
      expiry_date: expiry_date,
      planname: planname,
      phone: phone
    };
  
    // Make an HTTP POST request to send the data to the backend
    this.http.post('http://localhost:8586/admin', emailData).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        // Handle any success logic here
      },
      (error) => {
        console.error('Email sending failed:', error);
        // Handle any error or failure here
      }
    );
  }

}
