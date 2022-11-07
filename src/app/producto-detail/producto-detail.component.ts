import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../Producto';
@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

@Input() Producto?: Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
