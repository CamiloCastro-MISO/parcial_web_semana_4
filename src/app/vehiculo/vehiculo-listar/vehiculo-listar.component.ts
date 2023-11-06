import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];

  marcasCount: { [marca: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculosList(): Array<Vehiculo> {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
    return this.vehiculos;
  }

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe((vehiculosDesdeServicio) => {
      this.vehiculos = vehiculosDesdeServicio;
      this.countMarcas();
    });
  }

  countMarcas(): void {
    for (const vehiculo of this.vehiculos) {
      if (this.marcasCount[vehiculo.marca]) {
        this.marcasCount[vehiculo.marca]++;
      } else {
        this.marcasCount[vehiculo.marca] = 1;
      }
    }
  }

}
