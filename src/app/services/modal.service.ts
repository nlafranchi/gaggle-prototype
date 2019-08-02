import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public show = false;

  constructor() { }

  public onOpen() {
    this.show = true;
  }

  public onClose() {
    this.show = false;
  }
}
