import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent, canActivate:[AuthGuard] },
  { path: 'main-nav', component: MainNavComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

