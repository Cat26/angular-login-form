import {Component, Input, OnInit} from '@angular/core';
import {LoginConfirmationService} from "../login-confirmation.service";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input()email: string;
  isOpen = false;

  constructor(private loginConfirmationService: LoginConfirmationService) { }

  ngOnInit(): void {
  }

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
