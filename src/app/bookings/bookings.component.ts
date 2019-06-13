import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaksi } from '../model/transaksi';
import { TransaksiService } from '../service/transaksi.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Observable<Transaksi[]>;
  
  constructor(public transaksiService: TransaksiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataBookings();
  }

  reloadDataBookings(){
    this.bookings = this.transaksiService.getTransaksiByIdStatusCheck(3);
  }

}
