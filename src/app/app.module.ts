import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ProvedorComponent } from './provedor/provedor.component';
import { ProvedorDetailComponent } from './provedor-detail/provedor-detail.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { MenuComponent } from './menu/menu.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProvedorComponent,
    ProvedorDetailComponent,
    ProductoDetailComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
