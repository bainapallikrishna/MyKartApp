import { Component, inject } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  public users: any[] = [];
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
  this.getUserList();
}
getUserList(){

  this.userService.getusers().subscribe((data: any[]) => {
    console.log('User data:', data);
    this.users = data;
  });
}
}
