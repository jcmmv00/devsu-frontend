import { Component } from '@angular/core';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ClientesListComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

}
