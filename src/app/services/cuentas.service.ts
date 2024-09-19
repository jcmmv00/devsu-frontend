import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private apiURLCuentas = "";

  constructor(private http: HttpClient) {
    this.apiURLCuentas = apiUrl + '/account'
  }

  getCuentas(): Observable<any> {
    return this.http.get<any>(this.apiURLCuentas);
  }
}
