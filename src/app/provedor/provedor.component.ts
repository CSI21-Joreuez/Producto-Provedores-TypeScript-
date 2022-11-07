import { Component, OnInit } from '@angular/core';
import { Provedor } from '../Provedor';
import { Provedores } from '../mock-provedores';
import { Producto } from '../Producto';
import { ProvedorService } from '../provedor.service';
@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.css']
})
export class ProvedorComponent implements OnInit {

  
  Provedores = Provedores;
  selectedProvedor?: Provedor;
  constructor(private ProvedorS: ProvedorService) 
  {

   }

  ngOnInit(): void {
    this.getProvedor
  }
  getProvedor(): void {
    this.ProvedorS.getProvedor()
    .subscribe(provedores => this.Provedores = provedores);
  }
}
