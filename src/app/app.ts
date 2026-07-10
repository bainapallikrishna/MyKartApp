import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {Loader} from '../Shared/loader/loader';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Loader,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoginPage = false;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isLoginPage =
          this.router.url === '/login';
      });
     function logout(){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

      }
  }
}


