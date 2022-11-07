import { Component, OnInit } from '@angular/core';
import { Provedor } from '../Provedor';
import { ProvedorService } from '../provedor.service';
@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.css']
})
export class ProvedorComponent implements OnInit {
  provedores: Provedor[] = [];
  

  constructor(public ProvedorService: ProvedorService) 
  {}

  ngOnInit(): void {
    this.getProvedores();
  }
  getProvedores(): void {
    this.ProvedorService.getProvedores().subscribe(provedores => this.provedores = provedores);
  }
}
