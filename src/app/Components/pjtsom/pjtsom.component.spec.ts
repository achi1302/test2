import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjtsomComponent } from './pjtsom.component';

describe('PjtsomComponent', () => {
  let component: PjtsomComponent;
  let fixture: ComponentFixture<PjtsomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjtsomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjtsomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
