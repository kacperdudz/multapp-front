import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultCardComponent } from './mult-card.component';

describe('MultCardComponent', () => {
  let component: MultCardComponent;
  let fixture: ComponentFixture<MultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
