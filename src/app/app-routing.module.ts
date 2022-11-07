import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoComponent } from './producto/producto.component';
import { ProvedorDetailComponent } from './provedor-detail/provedor-detail.component';
import { ProvedorComponent } from './provedor/provedor.component';

const routes: Routes = [
 {path : 'provedor-detail/:id', component: ProvedorDetailComponent},
  { path: 'producto-detail/:id', component: ProductoDetailComponent},
  {path: 'provedor', component: ProvedorComponent},
  { path: 'producto', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
