import { Injectable } from '@angular/core';
import { Provedor } from './Provedor';
import { Provedores } from './mock-provedores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  constructor() { }
  getProvedor(): Observable<Provedor[]>
  {
    const producto = of(Provedores);
    return producto
  }
}
