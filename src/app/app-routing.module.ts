import {  NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'
import { HomedealComponent } from './frontend/deals/homedeal/homedeal.component';
const routes: Routes =[
  {path:"login", component:LoginComponent},
  {path:'',component:HomedealComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],exports: [RouterModule],
  declarations: [RouterModule]
})
export class AppRoutingModule { }
