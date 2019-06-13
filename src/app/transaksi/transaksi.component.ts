import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaksi } from '../model/transaksi';
import { TransaksiService } from '../service/transaksi.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent implements OnInit {

  transaksis: Observable<Transaksi[]>;
  editTransaksiDialogRef: MatDialogRef<EditTransaksiDialog>;

  constructor(public transaksiService : TransaksiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataTransaksi();
    
  }

  reloadDataTransaksi(){
    this.transaksis = this.transaksiService.getAllTransaksi();
  }

  openEditTransaksiDialog(action, idTransaksi:number=null, kodeTransaksi:string=null){
    this.editTransaksiDialogRef = this.dialog.open(EditTransaksiDialog,{
      width: '600px',
      data: {action : action , idTransaksi:idTransaksi, kodeTransaksi: kodeTransaksi}
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
  }

  ngOnInit(){
    
  }

  getTransaksiById(idTransaksi:number){
    // this.transaksiService.getTransaksiById
  }

  onSubmit(idTransaksi: number){

  }

  batal(){

  }

}

@Component({
  selector: 'delete-transaksi-alert',
  templateUrl: 'delete-transaksi-alert.html'
})
export class DeleteTransaksiDialog{
  
}