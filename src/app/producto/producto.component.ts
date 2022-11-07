import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService } from '../producto.service'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  Productos: Producto[] = [];

  constructor(private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
    .subscribe(Productos => this.Productos = Productos);
  }
}
