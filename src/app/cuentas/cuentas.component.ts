import { Component } from '@angular/core';
import { CuentasService } from '../services/cuentas.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TransactionModalComponent } from './transaction-modal/transaction-modal.component';


@Component({
  selector: 'app-cuentas',
  standalone: true,
  imports: [CurrencyPipe, CommonModule,TransactionModalComponent],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})
export class CuentasComponent {


  showModal = false;
  numeroDeCuenta = '';


  openModal(numeroDeCuenta: string) {
    this.showModal = true;
    this.numeroDeCuenta = numeroDeCuenta;
    console.log(numeroDeCuenta);
  }


  closeModal() {
    this.showModal = false;
  }

  cuentas: any[] = [];
  errorMessage: string = '';

  constructor(private cuentasService: CuentasService) { }

  ngOnInit(): void {
    this.cuentasService.getCuentas().subscribe({
      next: (data) => {
        this.cuentas = data;
      },
      error: (error) => {
        this.errorMessage = 'Hubo un problema al cargar las cuentas';
        console.error('Error fetching cuentas:', error);
      }
    });
  }

}
