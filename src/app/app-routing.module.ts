import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './admin/user/user.component';
import { LoginComponent } from './login/login.component/login.component.component';


const routes: Routes = [
{path:'', component: LoginComponent},
{path:'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
