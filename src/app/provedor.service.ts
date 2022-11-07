import { Injectable } from '@angular/core';
import { Provedor } from './Provedor';
import { Provedores } from './mock-provedores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  constructor() { }
  getProvedores(): Observable<Provedor[]>
  {
    const Provedor = of(Provedores);
    return Provedor
  }
  getProvedor(id: number): Observable<Provedor> {

    const Provedor = Provedores.find(h => h.id === id)!;
    return of(Provedor);
  }
}
