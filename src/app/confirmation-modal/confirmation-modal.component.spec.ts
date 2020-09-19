import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { LoginConfirmationService } from "../login-confirmation.service";

describe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;
  let loginConfirmationService;

  beforeEach( () => {
      loginConfirmationService = jasmine.createSpyObj('LoginConfirmationService', ['emitLoginConfirmedEvent']);
      TestBed.configureTestingModule({
        declarations: [ ConfirmationModalComponent ],
        providers: [{provide: LoginConfirmationService, useValue: loginConfirmationService}]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('closeModal', () => {
    it('should change isOpen to false', function () {
      component.isOpen = true;
      component.closeModal();
      expect(component.isOpen).toBeFalsy();
    });
  });

  describe('openModal', () => {
    it('should change isOpen to true', function () {
      component.openModal();
      expect(component.isOpen).toBeTruthy();
    });
  });

  describe('confirm', () => {
    it('should emit msg with email string to listening components', function () {
      component.email = 'test@gmail.com';
      component.confirm();
      expect(loginConfirmationService.emitLoginConfirmedEvent).toHaveBeenCalledWith('test@gmail.com');
    });
  });
});
