import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent, ConfirmationModalComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onLoginFormSubmit', function () {
    it('should reset loggedUserEmail to empty string and call openModal function in modal component', function () {
      spyOn(component.confirmationModalComponent, 'openModal');
      component.loggedUserEmail = 'email'
      component.onLoginFormSubmit();
      expect(component.loggedUserEmail).toBeFalsy();
    });
  });
});
