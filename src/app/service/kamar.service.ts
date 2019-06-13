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
  // kamar
  private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";
  private getKamarByIdUrl = "http://localhost:7080/pjihotel/api/v1/getKamarById";
  private getKamarByIdStatusKamarUrl = "http://localhost:7080/pjihotel/api/v1/getKamarByIdStatus";
  private addKamarUrl = "http://localhost:7080/pjihotel/api/v1/addKamar";
  private editKamarUrl = "http://localhost:7080/pjihotel/api/v1/editKamar";
  private deleteKamarUrl = "http://localhost:7080/pjihotel/api/v1/deleteKamar";

  // tipe kamar
  private getAllTipeKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllTipeKamar";
  private getTipeKamarByIdUrl = "http://localhost:7080/pjihotel/api/v1/getTipeKamarById";
  private addTipeKamarUrl = "http://localhost:7080/pjihotel/api/v1/addTipeKamar";
  private editTipeKamarUrl = "http://localhost:7080/pjihotel/api/v1/editTipeKamar";
  private deleteTipeKamarUrl = "http://localhost:7080/pjihotel/api/v1/deleteTipeKamar";
  
  // status kamar
  private getAllStatusKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllStatusKamar";
  private getStatusKamarByIdUrl = "http://localhost:7080/pjihotel/api/v1/getStatusKamarById";
  // private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";
  // private getAllKamarUrl = "http://localhost:7080/pjihotel/api/v1/getAllKamar";

  constructor(private http:HttpClient) { }

  // -- Kamar --
  public getAllKamar(): Observable<any>{
    return this.http.get(this.getAllKamarUrl);
  }

  public getKamarById(idKamar:number): Observable<any>{
    return this.http.get(`${this.getKamarByIdUrl}/${idKamar}`);
  }

  public getKamarByIdStatusKamar(idStatus:number): Observable<any>{
    return this.http.get(`${this.getKamarByIdStatusKamarUrl}/${idStatus}`);
  }

  public addKamar(kamar: Kamar){
    return this.http.post<Kamar>(this.addKamarUrl, kamar);
  }

  public editKamar(idKamar:number, kamar:Kamar){
    return this.http.put<Kamar>(`${this.editKamarUrl}/${idKamar}`, kamar);
  }

  public deleteKamar(idKamar:number){
    return this.http.delete(`${this.deleteKamarUrl}/${idKamar}`);
  }


  // -- Tipe Kamar ---
  public getAllTipeKamar(): Observable<any>{
    return this.http.get(this.getAllTipeKamarUrl);
  }

  public getTipeKamarById(idTipeKamar: number): Observable<any>{
    return this.http.get(`${this.getTipeKamarByIdUrl}/${idTipeKamar}`);
  }

  public addTipeKamar(tipekamar : Tipekamar){
    return this.http.post<Tipekamar>(this.addTipeKamarUrl, tipekamar);
  }

  public editTipeKamar(idTipeKamar:number, tipekamar: Tipekamar){
    return this.http.put<Tipekamar>(`${this.editTipeKamarUrl}/${idTipeKamar}`, tipekamar);
  }

  public deleteTipeKamar(idTipeKamar: number): Observable<any>{
    return this.http.delete(`${this.deleteTipeKamarUrl}/${idTipeKamar}`)
  }

  // -- Status Kamar --
  public getAllStatusKamar(): Observable<any>{
    return this.http.get(this.getAllStatusKamarUrl);
  }

  public getStatusKamarById(idStatusKamar:number): Observable<any>{
    return this.http.get(`${this.getStatusKamarByIdUrl}/${idStatusKamar}`);
  }

}
