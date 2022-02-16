import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MywebserviceService {
  
url="https://localhost:7244/api/webapi";
  constructor(private httpclient:HttpClient) { }

Displaycustomer()
{
  return this.httpclient.get(this.url);
}

deletecustomer(CustomerID:any)
{
  return this.httpclient.delete(this.url+"/"+CustomerID);
}

getcusonID(CustomerID:any)
{
  return this.httpclient.get(this.url+"/getrecord?CustomerID="+CustomerID);
}
getcustonID(CustomerID:any)
{
  return this.httpclient.get(this.url+"/getrecord?CustomerID="+CustomerID);
}

updatecustomer(c:any)
{
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
return this.httpclient.put(this.url+"/",c,{headers});
}

addcustomer(cus:any)
{
  const headers = { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': '',
};
  return this.httpclient.post(this.url+"/register",cus,{headers});
}



}
