import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Registration/login/login.component';
import { SignupComponent } from './Registration/signup/signup.component';
import { LandingpageComponent } from './Starting/landingpage/landingpage.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './HeadFoot/header/header.component';
import { FooterComponent } from './HeadFoot/footer/footer.component';

// 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    
    MatToolbarModule, MatButtonModule, MatIconModule
    // MatButtonModule,
    // MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
