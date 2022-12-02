import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeviceMappingComponent } from './update-devicemapping.component';

describe('UpdateDeviceMappingComponent', () => {
  let component: UpdateDeviceMappingComponent;
  let fixture: ComponentFixture<UpdateDeviceMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeviceMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeviceMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
