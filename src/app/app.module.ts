// import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransaksiComponent, EditTransaksiDialog, DeleteTransaksiDialog } from './transaksi/transaksi.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
// import { CustomersModule } from './customers/customers.module';
import { CustomersComponent, EditCustomerDialog, DeleteCustomerAlert } from './customers/customers/customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { from } from 'rxjs';
import { KamarComponent, EditKamarDialog, DeleteKamarDialog } from './kamar/kamar/kamar.component';
import { TipeKamarComponent, EditTipeKamarDialog, DeleteTipeKamarDialog } from './kamar/tipe-kamar/tipe-kamar.component';
import { AddTransaksiComponent, AddTransaksiLanjutDialog } from './add-transaksi/add-transaksi.component';
import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    TransaksiComponent,
    HeaderComponent,
    DashboardComponent,
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerDialog,
    DeleteCustomerAlert,
    KamarComponent,
    TipeKamarComponent,
    EditTipeKamarDialog,
    DeleteTipeKamarDialog,
    EditKamarDialog,
    DeleteKamarDialog,
    AddTransaksiComponent,
    AddTransaksiLanjutDialog,
    EditTransaksiDialog,
    DeleteTransaksiDialog,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents:[
    EditCustomerDialog,
    DeleteCustomerAlert,
    EditTipeKamarDialog,
    DeleteTipeKamarDialog,
    EditKamarDialog,
    DeleteKamarDialog,
    AddTransaksiLanjutDialog,
    EditTransaksiDialog,
    DeleteTransaksiDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
