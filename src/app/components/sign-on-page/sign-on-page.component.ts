import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormField } from 'src/app/models/form';
import { makeFormField } from 'src/app/helpers/form';

@Component({
  selector: 'app-sign-on-page',
  templateUrl: './sign-on-page.component.html',
  styleUrls: ['./sign-on-page.component.css']
})
export class SignOnPageComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  username: FormField = makeFormField();
  password: FormField = makeFormField();

  isFormValid = true;

  ngOnInit() {
  }

  public showAccountCreationModal(): void {
    this.modalService.onOpen();
  }

  validateUsername() {
    if (this.username.value.length === 0) {
      this.username.error = 'Username Required';
    } else {
      this.username.error = null;
    }
  }

  validatePassword() {
    if (this.password.value.length === 0) {
      this.password.error = 'Password Required';
    } else {
      this.password.error = null;
    }
  }

  validateForm() {
    this.isFormValid = true;

    this.validateUsername();
    this.validatePassword();

    if (this.username.error || this.password.error) {
      this.isFormValid = false;
    }
  }

  onSubmit() {
    this.validateForm();
    if (!this.isFormValid) {
      return;
    }
  }
}
