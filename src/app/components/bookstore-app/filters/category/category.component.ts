import { Component, OnInit, Input, Output } from '@angular/core';
import { Category } from '../../product-list/model/category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryService: CategoryService;
  categories: Category[];

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
    this.categories = categoryService.getCategories();
  }

  ngOnInit(): void {}

}
