import { Component, OnInit } from '@angular/core';
import { PriceMinService } from './price-min.service';


@Component({
  selector: 'app-input-preco-min',
  templateUrl: './input-preco-min.component.html',
  styleUrls: ['./input-preco-min.component.css'],
})
export class InputPrecoMinComponent implements OnInit {
  prefix = 'R$';
  priceMin: number;
  priceMinService: PriceMinService;

  constructor(priceMinService: PriceMinService) {
    this.priceMinService = priceMinService;
    this.priceMin = priceMinService.getPriceMin();
  }
  ngOnInit(): void {
    const precoMinElement = $('#filtroPrecoMin') as HTMLInputElement;
    let end = precoMinElement.value.length;
    let inputPrecoMin = false;

    precoMinElement.addEventListener('click', () => {
      precoMinElement.value = `${this.prefix}0000.00`;
      // this.priceService.setPriceMin(precoMinElement.value.slice(2));
      end = precoMinElement.value.length;
      precoMinElement.setSelectionRange(end - 1, end);
    });

    precoMinElement.addEventListener('keydown', (e) => {
      const key = getCode(e);
      inputPrecoMin = false;
      if (!isNaN(parseInt(key))) {
        inputPrecoMin = true;
        precoMinElement.setSelectionRange(end - 1, end);
      }
      if (key === 'Enter') precoMinElement.blur();
    });

    precoMinElement.addEventListener('input', () => {
      if (inputPrecoMin) end -= 1;
      if (end === precoMinElement.value.length - 2) end -= 1;
      if (end === 2) precoMinElement.blur();
      // this.priceService.setPriceMin(precoMinElement.value.slice(2));
    });
  }
}

const $ = (query: string): HTMLInputElement | null =>
  document.querySelector(query);

const getCode = (e: KeyboardEvent) => {
  e = e || window.event;
  return e.key;
};
