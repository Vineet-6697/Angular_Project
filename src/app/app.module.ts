import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { CourseComponent } from './course.component';
import { LoginModule } from './login/login.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { MainService } from './main.service';





@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    LoginModule,
    NavbarModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
