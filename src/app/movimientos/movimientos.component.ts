import { Component } from '@angular/core';
import { MovimientosService } from '../services/movimientos.service';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, DatePipe],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {


  movimientos: any[] = [];
  errorMessage: string = '';

  constructor(private movimientosService: MovimientosService) { }

  ngOnInit(): void {
    this.movimientosService.getMovimientos().subscribe({
      next: (data) => {
        this.movimientos = data;
      },
      error: (error) => {
        this.errorMessage = 'Hubo un problema al cargar los movimientos';
        console.error('Error fetching movimientos:', error);
      }
    });
  }

}
