import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { PublicComponent } from './core/register/public/public.component';
import { NgoComponent } from './core/register/ngo/ngo.component';
import { RegisterComponent } from './core/register/register.component';
import { CorporatesComponent } from './core/register/corporates/corporates.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgolistComponent } from './ngolist/ngolist.component';
import { CorplistComponent } from './corplist/corplist.component';
import { NgodetailComponent } from './ngodetail/ngodetail.component';
import { CorpdetailComponent } from './corpdetail/corpdetail.component';
import { HomeComponent } from './core/home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    NgoComponent,
    CorporatesComponent,
    RegisterComponent,
    NavbarComponent,
    NgolistComponent,
    CorplistComponent,
    NgodetailComponent,
    CorpdetailComponent,
    HomeComponent,
    VolunteerComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
