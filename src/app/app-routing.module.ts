import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransaksiComponent } from './transaksi/transaksi.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { TipeKamarComponent } from './kamar/tipe-kamar/tipe-kamar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'check-in',
    component: TransaksiComponent
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
    path: 'tipe-kamar',
    component: TipeKamarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
