import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import {makeFormField, isValidEmail, isValidPassword} from '../../helpers/form';
import { FormField } from 'src/app/models/form';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account-creation-modal',
  templateUrl: './account-creation-modal.component.html',
  styleUrls: ['./account-creation-modal.component.css']
})
export class AccountCreationModalComponent implements OnInit {

  username: FormField = makeFormField();
  password: FormField = makeFormField();
  email: FormField = makeFormField();
  users: User[];

  rememberMe = false;
  isFormValid = true;

  constructor(private modalService: ModalService, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      console.log('users', users)
    });
  }

  validateUsername() {
    if (this.username.value.length === 0) {
      this.username.error = 'Last Name Required';
    } else {
      this.username.error = null;
    }
  }

  validatePassword() {
    if (this.password.value.length === 0) {
      this.password.error = 'Password Required';
    } else {
      this.password.error = !isValidPassword(this.email.value) ? 'Uppercase, lowercase, number, special character required' : '';
    }
  }

  validateEmail() {
    if (this.email.value.length === 0) {
      this.email.error = 'Email Required';
    } else {
      this.email.error = !isValidEmail(this.email.value) ? 'Please enter a valid email' : '';
    }
  }

  validateForm() {
    this.validateEmail();
    this.validatePassword();
    this.validateUsername();
    if (this.username.error || this.password.error || this.email.error) {
      this.isFormValid = false;
      return;
    }
    this.isFormValid = true;
  }

  onCancel(): void {
    this.modalService.onClose();
  }

  onRegister(): void {
    this.isFormValid = true;
    this.validateForm();
    // validate form

    if (!this.isFormValid) {
      return;
    }

    // mock registration
  }
}
