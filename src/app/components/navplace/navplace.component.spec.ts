import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavplaceComponent } from './navplace.component';

describe('NavplaceComponent', () => {
  let component: NavplaceComponent;
  let fixture: ComponentFixture<NavplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
