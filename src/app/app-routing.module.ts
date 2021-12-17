import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
LoginComponent
const routes: Routes = [
  {path:"UserPage",component:UserPageComponent},
  {path:"Login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
