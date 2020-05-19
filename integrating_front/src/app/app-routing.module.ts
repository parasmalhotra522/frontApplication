import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path : 'login',component:LoginComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'**',component:ErrorpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
