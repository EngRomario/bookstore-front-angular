import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrecoMaxComponent } from './input-preco-max.component';

describe('InputPrecoMaxComponent', () => {
  let component: InputPrecoMaxComponent;
  let fixture: ComponentFixture<InputPrecoMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPrecoMaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPrecoMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
