import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMappingDetailsComponent } from './devicemapping-details.component';

describe('DeviceMappingDetailsComponent', () => {
  let component: DeviceMappingDetailsComponent;
  let fixture: ComponentFixture<DeviceMappingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMappingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMappingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
