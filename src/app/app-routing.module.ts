import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransaksiComponent } from './transaksi/transaksi.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { TipeKamarComponent } from './kamar/tipe-kamar/tipe-kamar.component';
import { KamarComponent } from './kamar/kamar/kamar.component';
import { AddTransaksiComponent } from './add-transaksi/add-transaksi.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'check-in-list',
    component: TransaksiComponent
  },
  {
    path: 'booking-list',
    component: BookingsComponent
  },
  {
    path: 'check-in/catat',
    component: AddTransaksiComponent
  },
  {
    path: 'buku-tamu',
    component: CustomersComponent
  },
  {
    path: 'buku-tamu/tambah',
    component: AddCustomerComponent
  },
  {
    path: 'kamar',
    component: KamarComponent
  },
  {
    path: 'tipe-kamar',
    component: TipeKamarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
