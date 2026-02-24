import { Component } from '@angular/core';
import { BookCardComponent } from './book-card';
import { BooksProvider, Filtering, Ordering } from '../../core/booksProvider';
import { Book, AllGenres, GenreEnum } from '../../core/books';
import { FormsModule } from "@angular/forms";

type ValueOf<T> = T[keyof T];

@Component({
  selector: 'books-panel',
  imports: [BookCardComponent, FormsModule],
  templateUrl: './books-panel.html',
  styleUrl: './books-panel.less'
})
export class BooksPanel {

  private booksProvider: BooksProvider = BooksProvider.Provider;

  protected isSeetingsCollapsed: boolean = true;

  protected books: Book[] = this.booksProvider.GetAllBooks();
  protected genres: GenreEnum[] = AllGenres;

  protected searchAuthorValue: string = '';
  protected searchTitleValue: string = '';
  protected searchYearValue: number | null = null;
  protected searchRatingValue: number = 0;
  protected searchGenreValue: GenreEnum | null = null;

  protected collapseSettings()
  {
    this.isSeetingsCollapsed = !this.isSeetingsCollapsed;
  }

  protected onSelectGenre(genre: string)
  {
    this.searchGenreValue = genre as GenreEnum | null;
  }

  protected search()
  {
    let filters: Filtering<Book>[] = [];
    let orders: Ordering<Book>[] = [];
    
    if (this.searchAuthorValue)
    {
      filters.push({FilterParam: 'author', FilterValue: this.searchAuthorValue});
    }
    if (this.searchTitleValue)
    {
      filters.push({FilterParam: 'title', FilterValue: this.searchTitleValue});
    }
    if (this.searchYearValue)
    {
      filters.push({FilterParam: 'year', FilterValue: this.searchYearValue});
    }
    if (this.searchRatingValue)
    {
      filters.push({FilterParam: 'rating', FilterValue: this.searchRatingValue});
    }
    if (this.searchGenreValue)
    {
      filters.push({FilterParam: 'genres', FilterValue: this.searchGenreValue});
    }

    this.books = this.booksProvider.SearchBooks(filters, orders, 10, 0);
  }
}
