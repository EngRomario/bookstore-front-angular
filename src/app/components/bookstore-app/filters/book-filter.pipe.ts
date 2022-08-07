import { Pipe, PipeTransform } from '@angular/core';

import { Book } from '../product-list/model/book';
import { Category } from '../product-list/model/category';

@Pipe({
  name: 'bookfilter',
  pure: false,
})
export class BookFilterPipe implements PipeTransform {
  transform(items: Book[], categories: Category[]): Book[] {
    if (!items || !categories) {
      return items;
    }

    if (categories.every((category) => category.checked === false)) {
      return items;
    }

    let _items: Book[] = [];
    categories.forEach((category) => {
      _items.push(
        ...items.filter((item) => {
          return item.category === category.name && category.checked === true;
        })
      );
    });

    return _items;
  }
}
