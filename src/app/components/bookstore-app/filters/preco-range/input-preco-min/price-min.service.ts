import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PriceMinService {
  priceMin: number = 0;

  setPriceMin(priceMin: number): void {
    this.priceMin = priceMin;
  }

  getPriceMin() {
    return this.priceMin;
  }

  constructor() {}
}
