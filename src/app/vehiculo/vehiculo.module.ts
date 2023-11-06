import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListarComponent } from './vehiculo-listar/vehiculo-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculoListarComponent],
  exports: [VehiculoListarComponent]
})
export class VehiculoModule { }
