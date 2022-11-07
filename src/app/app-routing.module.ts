import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProvedorDetailComponent } from './provedor-detail/provedor-detail.component';

const routes: Routes = [
  {path: 'provedores-details', component: ProvedorDetailComponent},
  { path: 'producto-details', component: ProductoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
