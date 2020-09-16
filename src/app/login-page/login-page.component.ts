import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  @ViewChild(ConfirmationModalComponent)
  private confirmationModalComponent: ConfirmationModalComponent;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}')])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onLoginFormSubmit() {
    console.warn(this.loginForm.value);

  }

  clear() {

  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

}
