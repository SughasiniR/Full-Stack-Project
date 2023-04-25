import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardService} from './auth-guard.service';
import {SignInComponent} from './sign-in/sign-in.component';
import {BooknowComponent} from './booknow/booknow.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookedUserDetailsComponent } from './booked-user-details/booked-user-details.component';

const routes: Routes = [
  {path: 'hotel-home', component: HotelHomeComponent },
  {path: 'hotels', component: HotelListComponent},
  {path: 'create-hotel', component: CreateHotelComponent,canActivate:[AuthGuardService] },
  {path: '', redirectTo: 'hotel-home', pathMatch: 'full'},
  {path: 'update-hotel/:id', component: UpdateHotelComponent},
  {path: 'hotel-details/:id', component: HotelDetailsComponent },
  {path: 'sign-in',component: SignInComponent},
  {path: 'login', component: LoginComponent,},
  {path: 'logout', component: LogoutComponent},
  {path: 'booknow', component: BooknowComponent},
  {path: 'admin-login', component:AdminLoginComponent,},
  {path: 'booked-user-details', component:BookedUserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }