import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Search, SortDirection } from '../../../core/paging';
import { Book, AllGenres, GenreEnum } from '../../../core/data/books';
import { BooksService } from '../../../core/services/booksService';
import { BookCardComponent } from '../book-card/book-card';
import { BooksSearchPanel } from '../books-search-panel/books-search-panel';

@Component({
  selector: 'books-panel',
  imports: [BookCardComponent, FormsModule, BooksSearchPanel, NgIf],
  templateUrl: './books-panel.html',
  styleUrl: './books-panel.less'
})
export class BooksPanel
{
  private booksServcie: BooksService = BooksService.Service;

  protected isSeetingsCollapsed: boolean = true;

  protected books: Book[] = this.booksServcie.GetAllBooks();

  protected collapseSettings()
  {
    this.isSeetingsCollapsed = !this.isSeetingsCollapsed;
  }

  protected onSearch(search: Search<Book>)
  {
    this.books = this.booksServcie.SearchBooks(search.Filters, search.Orders, search.Take, search.Skip);
  }
}
