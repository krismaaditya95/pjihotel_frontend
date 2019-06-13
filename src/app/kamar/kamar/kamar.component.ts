import { Component, OnInit, Input, Inject} from '@angular/core';
import { KamarService } from 'src/app/service/kamar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { Kamar } from 'src/app/model/kamar';
import { Tipekamar } from 'src/app/model/tipekamar';
import { Statuskamar } from 'src/app/model/statuskamar';

@Component({
  selector: 'app-kamar',
  templateUrl: './kamar.component.html',
  styleUrls: ['./kamar.component.css']
})
export class KamarComponent implements OnInit {

  kamars: Observable<Kamar[]>;

  editKamarDialogRef: MatDialogRef<EditKamarDialog>;
  deleteKamarDialogRef: MatDialogRef<DeleteKamarDialog>;
  
  constructor(public kamarService: KamarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataKamar();
  }

  public reloadDataKamar(){
    this.kamars = this.kamarService.getAllKamar();
  }

  openAddKamarDialog(){
    this.editKamarDialogRef = this.dialog.open(EditKamarDialog,{
      width: '600px'
    });
  }

  openEditKamarDialog(action, idKamar:number=null, noKamar:string=null){
    this.editKamarDialogRef = this.dialog.open(EditKamarDialog, {
      width: '600px',
      data: { action : action, idKamar : idKamar, noKamar : noKamar}
    });

    this.editKamarDialogRef.afterClosed().subscribe(result =>{
      this.reloadDataKamar();
    });
  }

  openDeleteKamarDialog(idKamar:number, noKamar:string){
    this.deleteKamarDialogRef = this.dialog.open(DeleteKamarDialog,{
      width: '400px',
      data: {idKamar: idKamar, noKamar:noKamar}
    });

    this.deleteKamarDialogRef.afterClosed().subscribe(RESULT =>{
      this.reloadDataKamar();
    });
  }
}

@Component({
  selector: 'edit-kamar-dialog',
  templateUrl: './edit-kamar-dialog.html'
})
export class EditKamarDialog{
  @Input() kamar: Kamar;

  tipekamars: Observable<Tipekamar[]>;
  statuskamars: Observable<Statuskamar[]>;

  constructor(public editKamarDialogRef: MatDialogRef<EditKamarDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private kamarService: KamarService){
    this.kamar = new Kamar();
  }

  ngOnInit(){
    if(this.data.action == 'edit'){
      this.getKamarById(this.data.idKamar);
      this.getAllTipeKamar();
      this.getAllStatusKamar();
    }else{
      this.getAllTipeKamar();
      this.getAllStatusKamar();
    }
  }

  getKamarById(idKamar: number){
    this.kamarService.getKamarById(idKamar).subscribe(kamar =>this.kamar = kamar);
  }

  getAllTipeKamar(){
    this.kamarService.getAllTipeKamar().subscribe(tipekamars => this.tipekamars = tipekamars);
  }

  getAllStatusKamar(){
    this.kamarService.getAllStatusKamar().subscribe(statuskamars => this.statuskamars = statuskamars);
  }

  onSubmit(idKamar: number){
    if(this.data.action == 'add'){
      this.kamarService.addKamar(this.kamar).subscribe(result => this.editKamarDialogRef.close());
    }else{
      this.kamarService.editKamar(idKamar, this.kamar).subscribe(result => this.editKamarDialogRef.close());
    }
  }

  batal(){
    this.editKamarDialogRef.close();
  }
}

@Component({
  selector: 'delete-kamar-alert',
  templateUrl: './delete-kamar-alert.html'
})
export class DeleteKamarDialog{
  kamar: Kamar;

  constructor(public deleteKamarDialogRef: MatDialogRef<DeleteKamarDialog>,@Inject(MAT_DIALOG_DATA)public data: any, private kamarService: KamarService){
    this.kamar = new Kamar();
  }

  deleteKamar(idKamar: number){
    this.kamarService.deleteKamar(idKamar).subscribe(
      result => {
        console.log(result);
        this.deleteKamarDialogRef.close();
      },
      error => console.log('Error : ' + error));
  }

  batal(){
    this.deleteKamarDialogRef.close();
  }
}
