import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { AddCropComponent } from './add-crop/add-crop.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddoperationComponent } from './addoperation/addoperation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    AddCropComponent,
    CreateAccountComponent,
    AddoperationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
