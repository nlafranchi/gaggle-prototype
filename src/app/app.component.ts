import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gaggle-prototype';

  constructor(private userService: UserService, private modalService: ModalService) {
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  get showModal(): boolean {
    return this.modalService.show;
  }

  hideModal(): void {
    this.modalService.onClose();
  }
}
