import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
    {path:'user', component: UserComponent, canActivate: [AuthGuard], data: {roles: ['User']}},
    {path:'login', component: LoginComponent},
    {path:'forbidden', component: ForbiddenComponent}
];