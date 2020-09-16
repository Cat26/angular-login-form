import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
