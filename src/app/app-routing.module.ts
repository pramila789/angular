import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {  path: 'dashboard', component: DashboardComponent },
  {path:'addcustomer', component:AddcustomerComponent},
  {path:'update/:CustomerID', component:UpdateComponent},
  {path:'view/:CustomerID', component:ViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
