import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../model/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // private customersApiUrl: string;

  private customersApiUrl = "http://localhost:7080/pjihotel/api/v1/customers";
  private getByIdUrl = "http://localhost:7080/pjihotel/api/v1/getCustomerById";

  constructor(private http:HttpClient){
    // this.customersApiUrl = "http://localhost:7080/pjihotel/api/v1/customers";
  }

  // public findAll(): Observable<Customers[]>{
  //   return this.http.get<Customers[]>(this.customersApiUrl);
  // }

  public getAllCustomers(): Observable<any>{
    return this.http.get(`${this.customersApiUrl}`);
  }

  public getCustomerById(idCustomer: number): Observable<any>{
    return this.http.get(`${this.getByIdUrl}/${idCustomer}`);
  }

  public save(customers: Customers){
    return this.http.post<Customers>(this.customersApiUrl, customers);
  }

  public edit(idCustomer: number, customers: Customers){
    const editCustomerUrl = `${this.customersApiUrl}/${idCustomer}`;
    return this.http.put<Customers>(editCustomerUrl, customers);
  }

  public deleteCustomer(idCustomer: number): Observable<any>{
    // dipakai klo ga pakai response entity (tanpa responseType)
    const deleteCustomerUrl = `${this.customersApiUrl}/${idCustomer}`;
    return this.http.delete(deleteCustomerUrl);

    //dipakai klo rest pakai response entity (tambahin responseType)
    // return this.http.delete(`${this.customersApiUrl}/${idCustomer}`, {responseType: 'text'});
  }
}
