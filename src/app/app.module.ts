
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { CourseComponent } from './course.component';
import { LoginModule } from './login/login.module';
import { NavbarModule } from './navbar/navbar.module';
import { MainService } from './main.service';
import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    NavbarModule,
    LoginModule,
    FooterModule,
    
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
