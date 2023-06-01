import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjtloComponent } from './pjtlo.component';

describe('PjtloComponent', () => {
  let component: PjtloComponent;
  let fixture: ComponentFixture<PjtloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjtloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjtloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
