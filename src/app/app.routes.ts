import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/clientes', pathMatch: 'full' }, // Ruta por defecto
    { path: 'clientes', component: ClientesComponent },
    { path: 'cuentas', component: CuentasComponent },
    { path: 'movimientos', component: MovimientosComponent },
    { path: 'reportes', component: ReportesComponent }
];
