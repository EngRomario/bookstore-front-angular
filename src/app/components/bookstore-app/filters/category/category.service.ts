import { Injectable } from '@angular/core';
import { Category } from '../../product-list/model/category';

@Injectable()
export class CategoryService {
  Categories: Category[] = [
    { name: 'Art-Photography', checked: false },
    { name: 'Biography', checked: false },
    { name: 'Business-Finance-Law', checked: false },
    { name: 'Childrens-Books', checked: false },
    { name: 'Computing', checked: false },
    { name: 'Crafts-Hobbies', checked: false },
    { name: 'Dictionaries-Languages', checked: false },
    { name: 'Entertainment', checked: false },
    { name: 'Food-Drink', checked: false },
    { name: 'Graphic-Novels-Anime-Manga', checked: false },
    { name: 'Health', checked: false },
    { name: 'History-Archaeology', checked: false },
    { name: 'Home-Garden', checked: false },
    { name: 'Humour', checked: false },
    { name: 'Medical', checked: false },
    { name: 'Mind-Body-Spirit', checked: false },
    { name: 'Natural-History', checked: false },
    { name: 'Personal-Development', checked: false },
    { name: 'Poetry-Drama', checked: false },
    { name: 'Reference', checked: false },
    { name: 'Religion', checked: false },
    { name: 'Romance', checked: false },
    { name: 'Science-Fiction-Fantasy-Horror', checked: false },
    { name: 'Science-Geography', checked: false },
    { name: 'Society-Social-Sciences', checked: false },
    { name: 'Sport', checked: false },
    { name: 'Stationery', checked: false },
    { name: 'Teaching-Resources-Education', checked: false },
    { name: 'Technology-Engineering', checked: false },
    { name: 'Teen-Young-Adult', checked: false },
    { name: 'Transport', checked: false },
    { name: 'Travel-Holiday-Guides', checked: false },
  ];

  getCategories() {
    return this.Categories;
  }

  constructor() {}
}
