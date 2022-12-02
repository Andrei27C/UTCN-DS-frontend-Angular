import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMappingListComponent } from './devicemapping-list.component';

describe('DeviceMappingListComponent', () => {
  let component: DeviceMappingListComponent;
  let fixture: ComponentFixture<DeviceMappingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMappingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
