import { Injectable } from '@angular/core';
import { Producto } from './Producto'
import { Catalogo } from './mock-productos';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [];

  constructor() {
    this.productos = Catalogo
   }
   
  getProductos():Producto[]
  {
    return this.productos;
  }

}

