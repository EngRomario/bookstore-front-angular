import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../product-list/model/book';

@Pipe({
  name: 'pricefilter',
  pure: false,
})
export class PriceFilterPipe implements PipeTransform {
  transform(items: Book[], priceMin: number, priceMax: number): Book[] {
    if (!items) {
      return items;
    }
    
    if (priceMin == 0 && priceMax == 0) {
      return items;
    }

    if (priceMin > priceMax) {
      return items;
    }
    return items.filter((item) => {
      return priceMin <= item.price * 5.21 && item.price * 5.21 <= priceMax;
    });
  }
}
