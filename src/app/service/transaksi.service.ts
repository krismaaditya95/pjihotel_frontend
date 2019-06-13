import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaksi } from '../model/transaksi';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
  // Transaksi
  private getAllTransaksiUrl = "http://localhost:7080/pjihotel/api/v1/getAllTransaksi";
  private getTransaksiByIdUrl = "http://localhost:7080/pjihotel/api/v1/getTransaksiById";
  private getTransaksiByIdStatusCheckUrl = "http://localhost:7080/pjihotel/api/v1/getTransaksiByIdStatusCheckIn";
  private changeStatusCheckInUrl = "http://localhost:7080/pjihotel/api/v1/changeStatusCheckIn";
  private addTransaksiUrl = "http://localhost:7080/pjihotel/api/v1/addTransaksi";
  private editTransaksiUrl = "http://localhost:7080/pjihotel/api/v1/editTransaksi";
  private deleteTransaksiUrl = "http://localhost:7080/pjihotel/api/v1/deleteTransaksi";

  private getAllStatusCheckUrl = "http://localhost:7080/pjihotel/api/v1/getAllStatusCheck";
  constructor(private http:HttpClient) { }

  // -- Transaksi --
  public getAllTransaksi(): Observable<any>{
    return this.http.get(this.getAllTransaksiUrl);
  }

  public getTransaksiById(idTransaksi:number): Observable<any>{
    return this.http.get(`${this.getTransaksiByIdUrl}/${idTransaksi}`);
  }

  public getTransaksiByIdStatusCheck(idStatusCheck:number): Observable<any>{
    return this.http.get(`${this.getTransaksiByIdStatusCheckUrl}/${idStatusCheck}`);
  }

  public addTransaksi(transaksi: Transaksi){
    return this.http.post<Transaksi>(this.addTransaksiUrl, transaksi);
  }

  public changeStatusCheckIn(idTransaksi:number, transaksi:Transaksi): Observable<any>{
    return this.http.put<Transaksi>(`${this.changeStatusCheckInUrl}/${idTransaksi}`, transaksi);
  }

  public editTransaksi(idTransaksi:number, transaksi:Transaksi){
    return this.http.put<Transaksi>(`${this.editTransaksiUrl}/${idTransaksi}`, transaksi);
  }

  public deleteTransaksi(idTransaksi:number){
    return this.http.delete(`${this.deleteTransaksiUrl}/${idTransaksi}`);
  }

  // -- Status Check-In
  public getAllStatusCheck(): Observable<any>{
    return this.http.get(this.getAllStatusCheckUrl);
  }
}
