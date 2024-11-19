import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { MessageService } from 'primeng/api';
import { User } from '../../../model/user';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../service/auth-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    TagModule,
    TooltipModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  loading: boolean = true;
  isAdmin: boolean = false

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadUsers();
    this.isAdmin = this.authService.hasRole('ROLE_ADMIN');
  }

  loadUsers() {
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      }
    });
  }

  toggleUserStatus(user: User) {
    this.userService.toggleUserStatus(user).subscribe({
      next: () => {
        this.loadUsers();
      },
      error: (error) => {
      }
    });
  }
}
