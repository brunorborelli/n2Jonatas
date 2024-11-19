import { AuthService } from './../../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { TagModule } from 'primeng/tag';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TagModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userData: User | null = null;
  username: any = null;

  constructor(private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Pega o ID do usuário logado do localStorage
    const token = this.authService.authToken;
    if (!token){
    }else{
      try {
        const decoded: any = jwtDecode(token); // Decodifica o JWT
        this.username = decoded.sub || [];
      } catch (e) {
        console.error('Erro ao decodificar o token', e);
      }
    }


    
    if (token) {
      this.userService.getUserByUsername(this.username).subscribe({
        next: (data) => {
          this.userData = data;
        },
        error: (error) => {
        }
      });
    }
  }
}
