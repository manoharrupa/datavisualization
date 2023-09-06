import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  constructor(private router:Router){

  }
  logoutUser(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    return true;
  }

}
