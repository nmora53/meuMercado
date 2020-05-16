import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {LoginGuard} from './guards/login.guard'
import { NologinGuard } from './guards/nologin.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canActivate: [NologinGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NologinGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
