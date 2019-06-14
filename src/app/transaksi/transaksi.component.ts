import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaksi } from '../model/transaksi';
import { TransaksiService } from '../service/transaksi.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  transaksis: Observable<Transaksi[]>;

  // dataSource = new MatTableDataSource<>(this.transaksis);

  editTransaksiDialogRef: MatDialogRef<EditTransaksiDialog>;

  constructor(public transaksiService : TransaksiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataTransaksi();
  }

  reloadDataTransaksi(){
    this.transaksis = this.transaksiService.getTransaksiByIdStatusCheck(1);
  }

  openCheckOutDialog(action, idTransaksi:number=null, kodeTransaksi:string=null){
    this.editTransaksiDialogRef = this.dialog.open(EditTransaksiDialog,{
      width: '600px',
      data: {action : action , idTransaksi:idTransaksi, kodeTransaksi: kodeTransaksi}
    });

    this.editTransaksiDialogRef.afterClosed().subscribe(result =>{
      this.reloadDataTransaksi();
    });
  }
}

@Component({
  selector: 'edit-transaksi-dialog',
  templateUrl: 'edit-transaksi-dialog.html'
})
export class EditTransaksiDialog{
  @Input() transaksi: Transaksi;

  constructor(public editTransaksiDialogRef: MatDialogRef<EditTransaksiDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private transaksiService: TransaksiService){
    this.transaksi = new Transaksi();
    this.transaksi.idStatusCheck = 2;

  }

  ngOnInit(){
    
  }

  getTransaksiById(idTransaksi:number){
    // this.transaksiService.getTransaksiById
  }

  onSubmit(idTransaksi: number){

  }

  checkOut(idTransaksi:number){
    this.transaksiService.changeStatusCheckIn(idTransaksi, this.transaksi).subscribe(
      result => {
        this.editTransaksiDialogRef.close();
      });
  }

  batal(){
    this.editTransaksiDialogRef.close();
  }

}

@Component({
  selector: 'delete-transaksi-alert',
  templateUrl: 'delete-transaksi-alert.html'
})
export class DeleteTransaksiDialog{
  
}