import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaksi } from '../model/transaksi';
import { TransaksiService } from '../service/transaksi.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  checkouts: Observable<Transaksi[]>;
  
  constructor(public transaksiService: TransaksiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataCheckouts();
  }

  reloadDataCheckouts(){
    this.checkouts = this.transaksiService.getTransaksiByIdStatusCheck(2);
  }

}
