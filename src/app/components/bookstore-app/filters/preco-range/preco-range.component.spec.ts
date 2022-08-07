import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoRangeComponent } from './preco-range.component';

describe('PrecoRangeComponent', () => {
  let component: PrecoRangeComponent;
  let fixture: ComponentFixture<PrecoRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecoRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecoRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
