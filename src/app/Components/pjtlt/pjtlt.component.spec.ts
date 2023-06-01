import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjtltComponent } from './pjtlt.component';

describe('PjtltComponent', () => {
  let component: PjtltComponent;
  let fixture: ComponentFixture<PjtltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjtltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjtltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
