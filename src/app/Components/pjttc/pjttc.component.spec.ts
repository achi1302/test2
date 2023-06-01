import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjttcComponent } from './pjttc.component';

describe('PjttcComponent', () => {
  let component: PjttcComponent;
  let fixture: ComponentFixture<PjttcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjttcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjttcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
