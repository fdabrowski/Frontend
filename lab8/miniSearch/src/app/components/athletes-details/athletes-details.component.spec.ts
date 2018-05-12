import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesDetailsComponent } from './athletes-details.component';

describe('AthletesDetailsComponent', () => {
  let component: AthletesDetailsComponent;
  let fixture: ComponentFixture<AthletesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
