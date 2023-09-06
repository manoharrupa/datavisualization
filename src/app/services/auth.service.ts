import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn(){
    let hasToken = false;
    if (localStorage.getItem('user') != ''){
      hasToken = true;
    }
    return hasToken;
  }
}