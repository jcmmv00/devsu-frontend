import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../environment';
import { Movimiento } from '../models/movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  private apiURLMovimientos = "";

  constructor(private http: HttpClient) {
    this.apiURLMovimientos = apiUrl + '/movement'
  }

  getMovimientos(): Observable<any> {
    return this.http.get<any>(this.apiURLMovimientos);
  }

  createMovimiento(movimiento: Movimiento): Observable<any> {
    return this.http.post<Movimiento>(this.apiURLMovimientos, movimiento);
  }

}
