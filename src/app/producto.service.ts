import { Injectable } from '@angular/core';
import { Producto } from './Producto'
import { Catalogo } from './mock-productos';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }
  getProductos(): Observable<Producto[]>
  {
    const producto = of(Catalogo);
    return producto
  }
  
  getProducto(id: number): Observable<Producto> {
    const Producto = Catalogo.find(h => h.id === id)!;
    return of(Producto);
  }
}

