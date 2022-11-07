import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Provedor } from '../Provedor';
import { ProvedorService } from '../provedor.service';

@Component({
  selector: 'app-provedor-detail',
  templateUrl: './provedor-detail.component.html',
  styleUrls: ['./provedor-detail.component.css']
})
export class ProvedorDetailComponent implements OnInit {

  provedor: Provedor | undefined;

  constructor(    
    private route: ActivatedRoute,
    private ProvedorService: ProvedorService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getProvedor();
  }
  getProvedor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ProvedorService.getProvedor(id)
    .subscribe(provedor => this.provedor = provedor);
  }
  goBack(): void {
    this.location.back();
  }
}
