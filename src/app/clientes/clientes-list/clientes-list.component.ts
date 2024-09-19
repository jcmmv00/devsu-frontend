import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit {

  clientes: any[] = [];
  errorMessage: string = '';

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
      },
      error: (error) => {
        this.errorMessage = 'Hubo un problema al cargar los clientes';
        console.error('Error fetching clientes:', error);
      }
    });
  }

}
