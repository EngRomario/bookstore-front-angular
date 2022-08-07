import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PriceMaxService {
  priceMax: number = 0;

  setPriceMax(priceMax: number): void {
    this.priceMax = priceMax;
  }

  getPriceMax() {
    return this.priceMax;
  }

  constructor() {}
}
