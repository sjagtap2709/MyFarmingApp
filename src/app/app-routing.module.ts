import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCropComponent } from './add-crop/add-crop.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
CreateAccountComponent
AddCropComponent
LoginComponent
const routes: Routes = [
  {path:"UserPage",component:UserPageComponent},
  {path:"Login",component:LoginComponent},
  {path:"Crops",component:AddCropComponent},
  {path:"Create",component:CreateAccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
