import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDataViewComponent } from './machine-data-view.component';

describe('MachineDataViewComponent', () => {
  let component: MachineDataViewComponent;
  let fixture: ComponentFixture<MachineDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
