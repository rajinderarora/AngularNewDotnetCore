import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../api/services";
import { Customer } from "../api/models";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.customerService.apiCustomerGet$Json().subscribe(results => {
      this.customers = results;
    });

  }

}
