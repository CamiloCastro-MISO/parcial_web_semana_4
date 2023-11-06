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

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculosList(): Array<Vehiculo> {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
    return this.vehiculos;
  }

  ngOnInit() {
    this.getVehiculosList();
  }

}
