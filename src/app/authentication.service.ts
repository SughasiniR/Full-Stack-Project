import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username : any, password : any)  {
    let email = sessionStorage.getItem('useremail')
    let pwd = sessionStorage.getItem('userpassword')
    console.log(username);
    if (username === email && password === pwd) {
      sessionStorage.setItem('username', username)
      return true;
    } 
    else {
      return false;
    }
  }

  authenticateadmin(email : any, password : any)  {
    if (email === 'homestay@gmail.com' && password === 'stayhome') {
      sessionStorage.setItem('adminemail','homestay@gmail.com')
      return true;
    } 
    else {
      return false;
    }
  }

  authenticateusername(username:any){
    let email = sessionStorage.getItem('useremail')
    if(username !== email){
      return true;
    }
    else{
      return false;
    }
  }

  authenticateadminname(username:any){
    if(username !== 'homestay@gmail.com'){
      return true;
    }
    else{
      return false;
    }
  }

  authenticatepassword(password:any){
    let pwd = sessionStorage.getItem('userpassword')
    if(password !== pwd){
      return true;
    }
    else{
      return false;
    }
  }

  authenticateadminpassword(password:any){
    if(password !== 'stayhome'){
      return true;
    }
    else{
      return false;
    }
  }

  getSignIn(email:any,pwd:any){
    sessionStorage.setItem('useremail',email)
    sessionStorage.setItem('userpassword',pwd)
  }
  
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('adminemail')
    if(user==='homestay@gmail.com'){
      console.log(!(user === null))
    return !(user === null)
    }
    else{
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    }
  }

  

  
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('useremail')
    sessionStorage.removeItem('userpassword')
    sessionStorage.removeItem('adminemail')
  }
}