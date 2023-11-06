/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { fa, faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { VehiculoListarComponent } from './vehiculo-listar.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListarComponent', () => {
  let component: VehiculoListarComponent;
  let fixture: ComponentFixture<VehiculoListarComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculoListarComponent],
      providers: [VehiculoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListarComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(
        faker.number.int(),
        faker.person.firstName(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int({ min: 1990, max: 2022 }),
        faker.number.int({ min: 0, max: 100000 }),
        faker.lorem.word(),
        faker.internet.avatar()
      ),
      new Vehiculo(
        faker.number.int(),
        faker.person.firstName(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int({ min: 1990, max: 2022 }),
        faker.number.int({ min: 0, max: 100000 }),
        faker.lorem.word(),
        faker.internet.avatar()
      ),
      new Vehiculo(
        faker.number.int(),
        faker.person.firstName(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.number.int({ min: 1990, max: 2022 }),
        faker.number.int({ min: 0, max: 100000 }),
        faker.lorem.word(),
        faker.internet.avatar()
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have an dd element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toContain(component.vehiculos[0].id);
  });

  it('should have a dd element for the id', () => {
    const dds = debug.queryAll(By.css('tbody tr:first-child td dd'));
    const content: HTMLElement = dds[0].nativeElement; // Asume que el primer dd es el ID
    expect(content.textContent).toContain(component.vehiculos[0].id.toString());
  });

  it('should create a table with three data rows plus one header row', () => {
    const bodyRows = debug.queryAll(By.css('tbody tr'));
    expect(bodyRows.length).toEqual(3);

    const headerRows = debug.queryAll(By.css('thead tr'));
    expect(headerRows.length).toEqual(1);

    expect(bodyRows.length + headerRows.length).toEqual(4);
  });


});
