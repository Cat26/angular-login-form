import {Component, Input} from '@angular/core';
import {LoginConfirmationService} from "../login-confirmation.service";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Input()email: string;
  isOpen = false;

  constructor(private loginConfirmationService: LoginConfirmationService) { }

  closeModal() {
    this.isOpen = false;
  }

  openModal() {
    this.isOpen = true;
  }

  confirm() {
    this.loginConfirmationService.emitLoginConfirmedEvent(this.email);
  }

}
