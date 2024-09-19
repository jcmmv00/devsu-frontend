import { MovimientoType } from "./movimientoType"

export type Movimiento = {
    "quantity": number,
    "movementType": MovimientoType,
    "accountNumber": string
}