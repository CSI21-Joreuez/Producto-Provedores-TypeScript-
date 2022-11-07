import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos = ProductoService;
  selectedProducto?: Producto;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(Producto: Producto): void {
    this.selectedProducto =Producto ;
  }
}
