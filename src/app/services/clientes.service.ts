import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiURLClientes = "";

  constructor(private http: HttpClient) {
    this.apiURLClientes = apiUrl + '/client'
  }

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiURLClientes);
  }
  
}
