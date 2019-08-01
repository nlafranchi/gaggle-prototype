import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gaggle-prototype';
  customerService: CustomerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  get isAuthenticated(): boolean {
    return this.customerService.isAuthenticated();
  }
}
