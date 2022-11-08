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

  @Input() Producto?: Producto
  constructor() {}

  ngOnInit(): void {
  }


}
