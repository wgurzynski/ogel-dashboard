import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDataChartComponent } from './production-data-chart.component';

describe('ProductionDataChartComponent', () => {
  let component: ProductionDataChartComponent;
  let fixture: ComponentFixture<ProductionDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
