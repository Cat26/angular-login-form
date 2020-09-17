import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {LoginConfirmationService} from "../login-confirmation.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginConfirmationService]
})
export class LoginPageComponent implements OnInit {
  @ViewChild(ConfirmationModalComponent) private confirmationModalComponent: ConfirmationModalComponent;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}')])
  })
  loggedUserEmail = '';

  constructor(private loginConfirmationService: LoginConfirmationService) {
    loginConfirmationService.loginConfirmedListener().subscribe(
      email => {
        this.onLogin(email);
      },
    );
  }

  ngOnInit(): void {
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
