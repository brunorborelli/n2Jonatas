import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/login/login.component";
import {AdmComponent} from "./page/adm/adm.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {UserComponent} from "./page/user/user.component";
import { GerenteComponent } from './page/gerente/gerente.component';
import { HubComponent } from './page/hub/hub.component';
import { RegisterUserComponent } from './page/register-user/register-user.component';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './page/users/user-list/user-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  { 
    path: 'admin', 
    component: AdmComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  { 
    path: 'gerente', 
    component: GerenteComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GERENTE', 'ROLE_ADMIN'] }
  },
  { 
    path: 'user', 
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_USER','ROLE_GERENTE', 'ROLE_ADMIN'] }
  },
  { 
    path: 'user-list', 
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_GERENTE'] }
  },
  {path: 'hub', component: HubComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterUserComponent},
];
