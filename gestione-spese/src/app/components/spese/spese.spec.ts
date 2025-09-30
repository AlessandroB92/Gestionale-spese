import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spese } from './spese';

describe('Spese', () => {
  let component: Spese;
  let fixture: ComponentFixture<Spese>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spese]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spese);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
