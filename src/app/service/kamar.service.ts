import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kamar } from '../model/kamar';
import { Observable } from 'rxjs';
import { Statuskamar } from '../model/statuskamar';
import { Tipekamar } from '../model/tipekamar';

@Injectable({
  providedIn: 'root'
})
export class KamarService {


  private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";
  private getAllTipeKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllTipeKamar";
  private getAllStatusKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllStatusKamar";
  // private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";
  // private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";
  // private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";

  constructor(private http:HttpClient) { }

  public getAllKamar(): Observable<any>{
    return this.http.get(this.getAllKamarUrl);
  }

  public getAllTipeKamar(): Observable<any>{
    return this.http.get(this.getAllTipeKamarUrl);
  }

  public getAllStatusKamar(): Observable<any>{
    return this.http.get(this.getAllStatusKamarUrl);
  }

  public addKamar(kamar: Kamar){
    
  }

  public addTipeKamar(statusKamar : Statuskamar){

  }

  public editKamar(idKamar: number, kamar: Kamar){

  }

  public editTipeKamar(idTipeKamar: number, tipekamar: Tipekamar){
    
  }
}
