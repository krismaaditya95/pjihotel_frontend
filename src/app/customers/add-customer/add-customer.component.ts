import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/model/customers';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/service/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
// export class AddCustomerComponent implements OnInit {

export class AddCustomerComponent{

  customers: Customers;
  constructor(private route:ActivatedRoute, private router: Router, private customerService: CustomersService){
    this.customers = new Customers();    
  }

  onSubmit(){
    this.customerService.save(this.customers).subscribe(result => this.redirectToListCustomers());
  }

  redirectToListCustomers(){
    this.router.navigate(['/buku-tamu']);
  }

  // ngOnInit() {
  // }

}
