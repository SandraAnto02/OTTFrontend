import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DBplans } from '../module/DBplans';

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

  setCusPlan(userPlans:any)
  {
    return this.httpClient.post(this.url+"/customerbuy",userPlans);
  }


  getCusPlanById(userid:any)
  {
    return this.httpClient.get<DBplans[]>(`${this.url}/byuser/${userid}`)

  }
 
}
