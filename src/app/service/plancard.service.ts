import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlancardService 
{
  url : string = 'http://localhost:8585/customer';

  constructor(private httpClient : HttpClient) 
  { }

  getAllPlans()

  {
    return this.httpClient.get(this.url+"/viewplans");
  }

  
}
