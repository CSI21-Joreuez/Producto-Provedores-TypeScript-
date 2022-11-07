import { Component, Input, OnInit } from '@angular/core';
import { Provedor } from '../Provedor';

@Component({
  selector: 'app-provedor-detail',
  templateUrl: './provedor-detail.component.html',
  styleUrls: ['./provedor-detail.component.css']
})
export class ProvedorDetailComponent implements OnInit {

  @Input() Provedor?: Provedor;
  constructor() { }

  ngOnInit(): void {
  }

}
