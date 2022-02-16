import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MywebserviceService } from '../mywebservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  message: any;
  data: any;
  CustomerID:any;
  responseData:  resultData | undefined;
  result: any;
  ID: any;
  addcustomer: any;

  constructor(private myservice:MywebserviceService,  private router:Router,private aR:ActivatedRoute) { }

  ngOnInit(): void {
    this.addcustomer= new FormGroup(
      {
        FirstName:new FormControl(),
       LastName:new FormControl(),
        Country:new FormControl(),
        
      }
    );

 
  }
  get FirstName()
  {
    return this.addcustomer.get('FirstName');
  }
  get LastName()
  {
    return this.addcustomer.get('LastName');
  }
  
  get Country()
  {
    return this.addcustomer.get('Country');
  }
  
  
  
  onSubmit()
  {
    
    this.data=this.addcustomer.value;
    this.data.CustomerID=this.CustomerID;
      this.myservice.viewcustomer(this.data).subscribe(res=>{this.result=res;
     
        
      });
    //  this.router.navigate(['/dashboard']);
      }
    }
  
  interface resultData{
    firstName:string;
    lastName:string;
    country:string;
  }