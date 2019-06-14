import { Component, OnInit, Input, Inject } from '@angular/core';
import { Transaksi } from '../model/transaksi';
import { TransaksiService } from '../service/transaksi.service';
import { Router } from '@angular/router';
import { KamarService } from '../service/kamar.service';
import { Observable } from 'rxjs';
import { Kamar } from '../model/kamar';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CustomersService } from '../service/customers.service';
import { Customers } from '../model/customers';
import { Statuscheck } from '../model/statuscheck';

@Component({
  selector: 'app-add-transaksi',
  templateUrl: './add-transaksi.component.html',
  styleUrls: ['./add-transaksi.component.css']
})
export class AddTransaksiComponent implements OnInit {

  @Input() transaksi: Transaksi;

  kamars: Observable<Kamar[]>;
  AddTransaksiLanjutDialogRef: MatDialogRef<AddTransaksiLanjutDialog>;

  constructor(private router: Router, private transaksiService:TransaksiService, private dialog:MatDialog, private kamarService:KamarService) {
    this.transaksi = new Transaksi();
  }

  ngOnInit() {
    // this.getAllDataKamar();
    this.getKamarByIdStatusKamar(1);
  }

  onAddSubmit(){
    this.transaksiService.addTransaksi(this.transaksi).subscribe(result=> this.redirectToListTransaksi());
  }

  getAllDataKamar(){
    this.kamars = this.kamarService.getAllKamar();
  }

  getKamarByIdStatusKamar(idStatusKamar:number){
    this.kamars = this.kamarService.getKamarByIdStatusKamar(idStatusKamar);
  }

  openAddTransaksiLanjutDialog(idKamar:number, noKamar:number, namaTipe:string, harga:number){
    var today = new Date();

    this.AddTransaksiLanjutDialogRef = this.dialog.open(AddTransaksiLanjutDialog,{
      width: '600px',
      data: {idKamar:idKamar, noKamar : noKamar, namaTipe : namaTipe, harga : harga, todayDate: today}
    });
  }

  redirectToListTransaksi(){
    this.router.navigate(['/check-in']);
  }

}


@Component({
  selector: 'add-transaksi-lanjut',
  templateUrl: 'add-transaksi-lanjut.html'
})
export class AddTransaksiLanjutDialog{
  @Input() transaksi: Transaksi;
  // transaksi: Transaksi;

  customers: Observable<Customers[]>;
  statuschecks: Observable<Statuscheck[]>;

  constructor(public addTransaksiLanjutDialogRef: MatDialogRef<AddTransaksiLanjutDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private transaksiService: TransaksiService, private customerService: CustomersService, private router:Router){
    this.transaksi = new Transaksi();
    this.transaksi.idKamar = this.data.idKamar;
  }

  ngOnInit(){
    this.getAllCustomers();
    this.getAllStatusCheck();
  }

  getTransaksiById(idTransaksi:number){
    // this.transaksiService.getTransaksiById
  }

  getAllCustomers(){
    this.customers = this.customerService.getAllCustomers();
  }

  getAllStatusCheck(){
    this.statuschecks = this.transaksiService.getAllStatusCheck();
  }

  onSubmit(){
    this.transaksiService.addTransaksi(this.transaksi).subscribe(result =>{
      this.addTransaksiLanjutDialogRef.close();
      this.redirectToListCheckIn();
    });
  }

  redirectToListCheckIn(){
    this.router.navigate(['/check-in-list']);
  }

  batal(){
    this.addTransaksiLanjutDialogRef.close();
  }

}