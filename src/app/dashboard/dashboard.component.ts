import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransaksiService } from '../service/transaksi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // checkins: string;
  // kamaravailable: string;
  // customers: string;

  checkins: Observable<string>;
  kamaravailable: Observable<string>;
  customers: Observable<string>;

  constructor(private transaksiService: TransaksiService) { }

  ngOnInit() {
    this.reloadDataDashboard();
  }

  reloadDataDashboard(){
    this.checkins = this.transaksiService.getJumlahNginep(1);
    this.kamaravailable = this.transaksiService.getKamarAvailable(1);
    this.customers = this.transaksiService.getJumlahCustomer();
  }

}
