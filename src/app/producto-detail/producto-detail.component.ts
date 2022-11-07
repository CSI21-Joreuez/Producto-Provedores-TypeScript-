import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Producto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  Producto: Producto | undefined;
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }
  getProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProducto(id)
      .subscribe(Producto => this.Producto = Producto);
  }

  goBack(): void {
    this.location.back();
  }
}
