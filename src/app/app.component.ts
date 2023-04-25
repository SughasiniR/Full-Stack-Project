import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Stay';
  constructor(public loginService:AuthenticationService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    
  }
  adminLogin(){
    let email = sessionStorage.getItem('adminemail')
    if(email === 'homestay@gmail.com'){
      this.router.navigate(['/hotels']);
    }
    else{
      this.router.navigate(['/admin-login']);
    }
  }
}
