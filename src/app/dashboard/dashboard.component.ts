import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MywebserviceService } from '../mywebservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result: any;
  newId: any;

  constructor(private myservice:MywebserviceService, private router:Router) { }

  ngOnInit(): void {
    this.myservice.Displaycustomer()
    .subscribe((r: any)=>
      {
        this.result=r;
      });
  }
deletecus(CustomerID :any)
{
  this.myservice.deletecustomer(CustomerID)
  .subscribe((r:any)=>
    {
      this.result=r;
      window.location.reload();
    });
}

updatecus(CustomerID :any)
{
  this.newId=CustomerID;
  this.router.navigate(['/update',CustomerID]);
}

addcus()
{
  this.router.navigate(['/addcustomer']);
}
viewcus(CustomerID :any)
{
  this.newId=CustomerID;
  this.router.navigate(['/view',CustomerID]);
}
}
