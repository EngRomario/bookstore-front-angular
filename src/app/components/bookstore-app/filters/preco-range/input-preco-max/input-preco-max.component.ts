import { Component, OnInit } from '@angular/core';
import { PriceMaxService } from './price-max.service';
@Component({
  selector: 'app-input-preco-max',
  templateUrl: './input-preco-max.component.html',
  styleUrls: ['./input-preco-max.component.css'],
})
export class InputPrecoMaxComponent implements OnInit {
  prefix = 'R$';
  priceMaxService: PriceMaxService;
  priceMax: number;

  constructor( priceMaxService: PriceMaxService) {
    this.priceMaxService = priceMaxService;
    this.priceMax = priceMaxService.getPriceMax();
  }
  ngOnInit(): void {
    const precoMaxElement = $('#filtroPrecoMax') as HTMLInputElement;
    let end = precoMaxElement.value.length;
    let inputPrecoMax = false;

    precoMaxElement.addEventListener('click', () => {
      precoMaxElement.value = `${this.prefix}0000.00`;
      this.priceMax = 0;
      end = precoMaxElement.value.length;
      precoMaxElement.setSelectionRange(end - 1, end);
    });

    precoMaxElement.addEventListener('keydown', (e) => {
      const key = getCode(e);
      inputPrecoMax = false;
      if (!isNaN(parseInt(key))) {
        inputPrecoMax = true;
        precoMaxElement.setSelectionRange(end - 1, end);
      }
      if(key === 'Enter') precoMaxElement.blur();
      
    });

    precoMaxElement.addEventListener('input', () => {
      if (inputPrecoMax) end -= 1;
      if (end === precoMaxElement.value.length - 2) end -= 1;
      if (end === 2) precoMaxElement.blur();
      // this.priceMaxService.setPriceMax(this.priceMax/100);
    });
  }
}

const $ = (query: string): HTMLInputElement | null =>
  document.querySelector(query);

const getCode = (e: KeyboardEvent) => {
  e = e || window.event;
  return e.key;
};
