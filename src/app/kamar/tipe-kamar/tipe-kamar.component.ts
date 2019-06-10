import { Component, OnInit } from '@angular/core';
import { KamarService } from 'src/app/service/kamar.service';
import { MatDialog } from '@angular/material';
import { Tipekamar } from 'src/app/model/tipekamar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipe-kamar',
  templateUrl: './tipe-kamar.component.html',
  styleUrls: ['./tipe-kamar.component.css']
})
export class TipeKamarComponent implements OnInit {

  tipekamars: Observable<Tipekamar[]>;
  
  constructor(public kamarService: KamarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadDataTipeKamar();
  }

  public reloadDataTipeKamar(){
    this.tipekamars = this.kamarService.getAllTipeKamar();
  }



}
