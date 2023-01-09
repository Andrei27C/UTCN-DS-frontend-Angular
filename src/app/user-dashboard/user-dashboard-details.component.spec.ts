import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardDetailsComponent } from './user-dashboard-details.component';

describe('UserDashboardDetailsComponent', () => {
  let component: UserDashboardDetailsComponent;
  let fixture: ComponentFixture<UserDashboardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
