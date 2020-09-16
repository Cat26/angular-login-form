import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  isOpen = false;
  isConfirmed = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.isOpen = false;
  }

  openModal() {
    this.isOpen = true;
  }

  confirm() {
    this.isConfirmed = true;
    this.closeModal();
  }

}
