import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookService } from './components/bookstore-app/product-list/product-list.component.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { PrecoRangeComponent } from './components/bookstore-app/filters/preco-range/preco-range.component';
import { InputPrecoMaxComponent } from './components/bookstore-app/filters/preco-range/input-preco-max/input-preco-max.component';
import { InputPrecoMinComponent } from './components/bookstore-app/filters/preco-range/input-preco-min/input-preco-min.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BookFilterPipe } from './components/bookstore-app/filters/book-filter.pipe';
import { PriceFilterPipe} from './components/bookstore-app/filters/price-filter.pipe';
import { CategoryComponent } from './components/bookstore-app/filters/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CategoryService } from './components/bookstore-app/filters/category/category.service';
import { PriceMaxService } from './components/bookstore-app/filters/preco-range/input-preco-max/price-max.service';
import { PriceMinService } from './components/bookstore-app/filters/preco-range/input-preco-min/price-min.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    BookstoreAppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    FiltersComponent,
    ProductListComponent,
    PrecoRangeComponent,
    InputPrecoMaxComponent,
    InputPrecoMinComponent,
    ProductItemComponent,
    BookFilterPipe,
    CategoryComponent,
    PriceFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [BookService, CategoryService, PriceMinService, PriceMaxService],
  bootstrap: [AppComponent],
})
export class AppModule {}
