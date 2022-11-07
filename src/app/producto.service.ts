import { Injectable } from '@angular/core';
import { Producto } from './Producto'
import { Catalogo } from './mock-productos';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }
  getProducto(): Observable<Producto[]>
  {
    const producto = of(Catalogo);
    return producto
  }
}
