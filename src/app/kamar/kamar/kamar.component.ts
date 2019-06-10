import { Component, OnInit } from '@angular/core';
import { KamarService } from 'src/app/service/kamar.service';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Kamar } from 'src/app/model/kamar';

@Component({
  selector: 'app-kamar',
  templateUrl: './kamar.component.html',
  styleUrls: ['./kamar.component.css']
})
export class KamarComponent implements OnInit {

  kamar: Observable<Kamar[]>;
  
  constructor(public kamarService: KamarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataKamar();
  }

  public reloadDataKamar(){
    this.kamar = this.kamarService.getAllKamar();
  }

}
