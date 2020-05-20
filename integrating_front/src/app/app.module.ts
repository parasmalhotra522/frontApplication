import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StripComponent } from './strip/strip.component';
import { DishesComponent } from './dishes/dishes.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { LeadersComponent } from './leaders/leaders.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    HomeFooterComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    StripComponent,
    DishesComponent,
    PromotionsComponent,
    LeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
