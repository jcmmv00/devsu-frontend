import { HttpClient, HttpParams } from '@angular/common/http';
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

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  obtenerReporte(fechaInicial: Date, fechaFinal: Date, accountNumber: string) {
    const formattedStartDate = this.formatDate(fechaInicial);
    const formattedEndDate = this.formatDate(fechaFinal);
    const params = new HttpParams()
      .set('date', `${formattedStartDate},${formattedEndDate}`)
      .set('accountNumber', accountNumber);
    return this.http.get<any>(this.apiURLMovimientos + '/report', { params });
  }

}
