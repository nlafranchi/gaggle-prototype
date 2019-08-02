import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormField } from 'src/app/models/form';
import { makeFormField } from 'src/app/helpers/form';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-on-page',
  templateUrl: './sign-on-page.component.html',
  styleUrls: ['./sign-on-page.component.css']
})
export class SignOnPageComponent {
  showAuthenticationError = false;
  username: FormField = makeFormField();
  password: FormField = makeFormField();
  isFormValid = true;

  constructor(private modalService: ModalService, private userService: UserService, private router: Router) { }

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

    this.login();
  }

  // For the purposes of this prototype, id is the concatenation
  // of the username and password.
  login() {
    this.showAuthenticationError = false;

    this.userService.getUser(this.username.value + this.password.value)
    .subscribe(response => {
      this.userService.setAuthenticated(response.id);
      this.router.navigate(['']);
    },
    err => {
      console.error('error: ', err.status);
      if (err.status === 404) {
        this.showAuthenticationError = true;
      }
    });
  }
}
