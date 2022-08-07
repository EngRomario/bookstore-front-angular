import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrecoMinComponent } from './input-preco-min.component';

describe('InputPrecoMinComponent', () => {
  let component: InputPrecoMinComponent;
  let fixture: ComponentFixture<InputPrecoMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPrecoMinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPrecoMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
