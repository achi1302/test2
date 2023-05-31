import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjtbotlPageComponent } from './pjtbotl-page.component';

describe('PjtbotlPageComponent', () => {
  let component: PjtbotlPageComponent;
  let fixture: ComponentFixture<PjtbotlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjtbotlPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjtbotlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
