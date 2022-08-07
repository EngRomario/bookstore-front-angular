import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { 
    const precoMinElement = $('#filtroPrecoMin') as HTMLInputElement;
    const precoMaxElement = $('#filtroPrecoMax') as HTMLInputElement;

    precoMaxElement.addEventListener('blur', () => {
      if (
        parseFloat(precoMinElement.value.slice(2)) >
        parseFloat(precoMaxElement.value.slice(2))
      ) {
        alert('Preço Máximo menor que Preço Mínimo');
      }
    });
  }
}
const $ = (query: string): HTMLInputElement | null =>
  document.querySelector(query);
