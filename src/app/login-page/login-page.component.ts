import {Component, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {LoginConfirmationService} from "../login-confirmation.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginConfirmationService]
})
export class LoginPageComponent {
  @ViewChild(ConfirmationModalComponent) confirmationModalComponent: ConfirmationModalComponent;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.*[0-9])(?=.{8,})/)])
  })
  loggedUserEmail = '';

  constructor(private loginConfirmationService: LoginConfirmationService) {
    loginConfirmationService.loginConfirmedListener().subscribe(
      email => {
        this.onLogin(email);
      },
    );
  }

  onLoginFormSubmit() {
    this.loggedUserEmail = '';
    this.confirmationModalComponent.openModal();

  }

  onLogin(email) {
    this.loggedUserEmail = email;
    this.clear();
    this.confirmationModalComponent.closeModal();
  }

  clear() {
    this.loginForm.reset();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
