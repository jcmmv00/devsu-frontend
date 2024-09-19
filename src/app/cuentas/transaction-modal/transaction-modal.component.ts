import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovimientosService } from '../../services/movimientos.service';
import { Movimiento } from '../../models/movimiento';
import { MovimientoType } from '../../models/movimientoType';

@Component({
  selector: 'app-transaction-modal',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './transaction-modal.component.html',
  styleUrl: './transaction-modal.component.css'
})
export class TransactionModalComponent {

  messageError: string = "";
  messageSuccess: string = "Transacción completada con éxito";

  errorMessageFlag: boolean = false;
  successMessageFlag: boolean = false;
  

  @Input() numeroDeCuenta!: string;
  @Output() close = new EventEmitter<void>();
  transactionForm: FormGroup;



  constructor(private fb: FormBuilder, private movimientoService: MovimientosService) {
    this.transactionForm = this.fb.group({
      cantidad: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onDepositar() {

    this.errorMessageFlag = false;
    this.successMessageFlag = false;

    if (this.transactionForm.valid) {
      console.log('Depositar:', this.transactionForm.value.cantidad);
      let movimiento: Movimiento = {
        accountNumber: this.numeroDeCuenta,
        movementType: MovimientoType.DEPOSIT,
        quantity: this.transactionForm.value.cantidad
      }

      this.movimientoService.createMovimiento(movimiento).subscribe({
        next: (data) => {
          this.successMessageFlag = true;
        },
        error: (error) => {
          this.errorMessageFlag = true;
          this.messageError = error.error;
          console.error('Error:', error);
        }
      });;
    }
  }

  onRetirar() {

    this.errorMessageFlag = false;
    this.successMessageFlag = false;

    if (this.transactionForm.valid) {
      console.log('Retirar:', this.transactionForm.value.cantidad);
      let movimiento: Movimiento = {
        accountNumber: this.numeroDeCuenta,
        movementType: MovimientoType.WITHDRAWAL,
        quantity: this.transactionForm.value.cantidad
      }

      this.movimientoService.createMovimiento(movimiento).subscribe({
        next: (data) => {
          this.successMessageFlag = true;
        },
        error: (error) => {
          this.errorMessageFlag = true;
          this.messageError = error.error;
          console.error('Error: ', error);
        }
      });;
    }
  }

  onCancel() {
    this.close.emit();
  }
}
