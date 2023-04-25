import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule} from '@angular/forms';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BooknowComponent } from './booknow/booknow.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookedUserDetailsComponent } from './booked-user-details/booked-user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    CreateHotelComponent,
    UpdateHotelComponent,
    HotelDetailsComponent,
    HotelHomeComponent,
    LoginComponent,
    LogoutComponent,
    SignInComponent,
    BooknowComponent,
    AdminLoginComponent,
    BookedUserDetailsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }