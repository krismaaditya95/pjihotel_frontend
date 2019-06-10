import { Component, OnInit, Inject, Input } from '@angular/core';
import { Customers } from 'src/app/model/customers';
import { CustomersService } from 'src/app/service/customers.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

export interface DialogData{
  idCustomer: number;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  // customers: Customers[];
  idCustomer: number;
  noIdentitas: number;
    namaDepan: string;
    namaBelakang: string;
    noTelp: number;
    email: string;
    alamat: string;

  customers: Observable<Customers[]>;

  EditDialogRef: MatDialogRef<EditCustomerDialog>;
  DeleteDialogRef: MatDialogRef<DeleteCustomerAlert>;
  constructor(public customerService: CustomersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadData();
  }

  public reloadData(){
    this.customers = this.customerService.getAllCustomers();
  }

  public getCustomerById(idCustomer: number){
    this.customerService.getCustomerById(idCustomer);
  }

  openEditCustomerDialog(id_customer : number){

    this.EditDialogRef = this.dialog.open(EditCustomerDialog,{
      width: '800px',
      hasBackdrop: true,
      data: { id_customer : id_customer }
    });

    this.EditDialogRef.afterClosed().subscribe(result =>{
      this.reloadData();
    });
  }

  openDeleteCustomerDialog(idCustomer : number){
    this.DeleteDialogRef = this.dialog.open(DeleteCustomerAlert,{
      width: '400px',
      height: '150px', 
      data: { id_customer : idCustomer}
    });

    this.DeleteDialogRef.afterClosed().subscribe(result=>{
      console.log('Dialog delete telah ditutup');
      this.reloadData();
    });
  }

  // openEditCustomerDialog(){
  //   this.dialogRef = this.dialog.open(EditCustomerDialog);
  // }

  public deleteCustomer(idCustomer: number){
    // this.customerService.save(this.customers).subscribe(result => this.redirectToListCustomers());
    // this.customerService.deleteCustomer(idCustomer).subscribe( result => this.reloadData());
    this.customerService.deleteCustomer(idCustomer).subscribe(
      data => {
        console.log(data);
        // this.reloadData();
      },
      error => console.log('Error : ' + error));
      
  }

}

@Component({
  selector: 'edit-customer-dialog',
  // template: '<h4>asu</h4>'
  templateUrl: './edit-customer-dialog.html'
})
export class EditCustomerDialog{
  @Input() customer : Customers;
  // customers: Customers;

  constructor(public dialogRef: MatDialogRef<EditCustomerDialog> , @Inject(MAT_DIALOG_DATA) public data: any, private Editroute:ActivatedRoute, private router: Router, private customerService: CustomersService, public dialog: MatDialog){
    this.customer = new Customers();
  }

  ngOnInit(){
    this.getCustomerById(this.data.id_customer);
  }

  getCustomerById(idCustomer : number){
    // this.customerService.get clean package jetty:run
    this.customerService.getCustomerById(idCustomer).subscribe(customer => this.customer = customer);
  }
  // getCustomerById(idCustomer: number){
  //   this.customers = new Customers;
  //   this.customers = this.customerService.getCustomerById(idCustomer);
  // }

  onEditSubmit(idCustomer:number){
    this.customerService.edit(idCustomer, this.customer).subscribe(result => this.dialogRef.close());
    // let mainComponentFunction = new CustomersComponent(this.customerService, this.dialog);    
    // mainComponentFunction.reloadData();
  }

  batal(){
    this.dialogRef.close();
  }
}

@Component({
  selector: 'delete-customer-alert',
  templateUrl: './delete-customer-alert.html'
})
export class DeleteCustomerAlert{
  customers: Customers;

  constructor(public DeleteDialogRef: MatDialogRef<DeleteCustomerAlert> , @Inject(MAT_DIALOG_DATA) public data: any, private Delroute:ActivatedRoute, private router: Router, public customerService: CustomersService, public dialog: MatDialog){
    this.customers = new Customers();
  }

  // getCustomerById(idCustomer: number){
  //   this.customers = new Customers;
  //   this.customers = this.customerService.getCustomerById(idCustomer);
  // }

  deleteCustomer(idCustomer: number){
    let mainComponentFunction = new CustomersComponent(this.customerService, this.dialog);
    
    mainComponentFunction.deleteCustomer(idCustomer);
    this.DeleteDialogRef.close();
    // mainComponentFunction.reloadData();
  }

  batal(){
    this.DeleteDialogRef.close();
  }
}