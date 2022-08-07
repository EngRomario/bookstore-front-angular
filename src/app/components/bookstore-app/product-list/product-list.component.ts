import { Component, OnInit } from '@angular/core';

import { Category } from './model/category';
import { BookService } from './product-list.component.service';
import { CategoryService } from '../filters/category/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  livros: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  categories: Category[];
  bookService: BookService;
  categoryService: CategoryService;
  priceMin: number = 0;
  priceMax: number = 0;

  constructor(
    bookService: BookService,
    categoryService: CategoryService,
  ) {
    this.bookService = bookService;
    this.categoryService = categoryService;
    this.categories = categoryService.getCategories();

  }

  ngOnInit(): void {
    this.fetchBooks();

    window.onload = () => {
      const priceMinElement = document.getElementById(
        'filtroPrecoMin'
      ) as HTMLInputElement;
      const priceMaxElement = document.getElementById(
        'filtroPrecoMax'
      ) as HTMLInputElement;

      priceMinElement.addEventListener('blur', () => { this.priceMin = parseFloat(priceMinElement.value.slice(2)) });
      priceMaxElement.addEventListener('blur', () => { this.priceMax = parseFloat(priceMaxElement.value.slice(2)) });
    };
  }

  fetchBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.livros = data;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchBooks();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchBooks();
  }
}
