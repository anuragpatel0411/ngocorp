import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { NgolistComponent } from './ngolist/ngolist.component';
import { CorplistComponent } from './corplist/corplist.component';
import { NgodetailComponent } from './ngodetail/ngodetail.component';
import { CorpdetailComponent } from './corpdetail/corpdetail.component';
import { HomeComponent } from './core/home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "ngo-listing", component: NgolistComponent},
  { path: "corporate-listing", component: CorplistComponent},
  { path: "volunteer", component: VolunteerComponent},
  { path: 'ngo/:id', component: NgodetailComponent},
  { path: 'corporate/:id', component: CorpdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
