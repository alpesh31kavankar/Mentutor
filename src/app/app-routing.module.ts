import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Registration/login/login.component';
import { HeaderComponent } from './HeadFoot/header/header.component';
import { FooterComponent } from './HeadFoot/footer/footer.component';
import { SignupComponent } from './Registration/signup/signup.component';
import { LandingpageComponent } from './Starting/landingpage/landingpage.component';

const routes: Routes = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingpageComponent },
  // { path: 'second-component', component: SecondComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }