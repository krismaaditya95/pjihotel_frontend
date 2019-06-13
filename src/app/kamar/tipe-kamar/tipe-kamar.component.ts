import { Component, OnInit, Input, Inject } from '@angular/core';
import { KamarService } from 'src/app/service/kamar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tipekamar } from 'src/app/model/tipekamar';
import { Observable } from 'rxjs';
// import { TIMEOUT } from 'dns';

@Component({
  selector: 'app-tipe-kamar',
  templateUrl: './tipe-kamar.component.html',
  styleUrls: ['./tipe-kamar.component.css']
})
export class TipeKamarComponent implements OnInit {

  tipekamars: Observable<Tipekamar[]>;

  editTipeKamarDialogRef: MatDialogRef<EditTipeKamarDialog>;
  deleteTipeKamarDialogRef: MatDialogRef<DeleteTipeKamarDialog>;
  
  constructor(public kamarService: KamarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataTipeKamar();
  }

  public reloadDataTipeKamar(){
    this.tipekamars = this.kamarService.getAllTipeKamar();
  }

  public getTipeKamarById(idTipeKamar: number){
    this.kamarService.getTipeKamarById(idTipeKamar);
  }

  openAddTipeKamarDialog(){
    this.editTipeKamarDialogRef = this.dialog.open(EditTipeKamarDialog,{
      width: '600px'
    });
  }

  openEditTipeKamarDialog(action, idTipeKamar: number=null, namaTipe:string=null){
    this.editTipeKamarDialogRef = this.dialog.open(EditTipeKamarDialog,{
      width: '600px',
      data: { action : action, idTipeKamar : idTipeKamar, namaTipe:namaTipe}
    });

    this.editTipeKamarDialogRef.afterClosed().subscribe(result =>{
      this.reloadDataTipeKamar();
    });
  }

  openDeleteTipeKamarDialog(idTipeKamar: number, namaTipe:string){
    this.deleteTipeKamarDialogRef = this.dialog.open(DeleteTipeKamarDialog,{
      width: '400px',
      height: '200px',
      data: {idTipeKamar: idTipeKamar, namaTipe: namaTipe}
    });

    this.deleteTipeKamarDialogRef.afterClosed().subscribe(result =>{
      this.reloadDataTipeKamar();
    });
  }
}

@Component({
  selector: 'edit-tipe-kamar-dialog',
  templateUrl: './edit-tipe-kamar-dialog.html'
})
export class EditTipeKamarDialog{
  @Input() tipekamar: Tipekamar;

  constructor(public editTipeKamarDialogRef: MatDialogRef<EditTipeKamarDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private kamarService: KamarService){
    this.tipekamar = new Tipekamar();
  }

  ngOnInit(){
    if(this.data.action == 'edit'){
      this.getTipeKamarById(this.data.idTipeKamar);
    }
  }

  getTipeKamarById(idTipeKamar: number){
    this.kamarService.getTipeKamarById(idTipeKamar).subscribe(tipekamar => this.tipekamar = tipekamar);
  }

  onEditSubmit(idTipeKamar: number){
    if(this.data.action=='add'){
      this.kamarService.addTipeKamar(this.tipekamar).subscribe(result => this.editTipeKamarDialogRef.close());
    }else{
      this.kamarService.editTipeKamar(idTipeKamar, this.tipekamar).subscribe(result => this.editTipeKamarDialogRef.close());
    }
  }

  batal(){
    this.editTipeKamarDialogRef.close();
  }
}

@Component({
  selector: 'delete-tipe-kamar-alert',
  templateUrl: './delete-tipe-kamar-alert.html'
})
export class DeleteTipeKamarDialog{
  tipekamar: Tipekamar;

  constructor(public deleteTipeKamarDialogRef: MatDialogRef<DeleteTipeKamarDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private kamarService: KamarService, public dialog: MatDialog){
    this.tipekamar = new Tipekamar(); 
  }

  deleteTipeKamar(idTipeKamar: number){
    this.kamarService.deleteTipeKamar(idTipeKamar).subscribe(
      result => {
        console.log(result);
          this.deleteTipeKamarDialogRef.close();
      },
      error => console.log('Error : ' + error));
  }

  batal(){
    this.deleteTipeKamarDialogRef.close();
  }
}