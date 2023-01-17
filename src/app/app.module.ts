
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
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProductsComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    NavbarModule,
    LoginModule,
    FooterModule,
    MatCardModule
    
    
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
