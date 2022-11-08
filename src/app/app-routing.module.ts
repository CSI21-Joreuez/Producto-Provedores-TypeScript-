import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ProvedorDetailComponent } from './provedor-detail/provedor-detail.component';
import { ProvedorComponent } from './provedor/provedor.component';

const routes: Routes = [
  {path : 'provedor-detail/:id', component: ProvedorDetailComponent},
  {path: 'provedor', component: ProvedorComponent},
  { path: 'producto', component: ProductoComponent},
  { path: '**', redirectTo: '/producto', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
