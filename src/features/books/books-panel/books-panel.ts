import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Filtering, Ordering, SortDirection } from '../../../core/paging';
import { Book, AllGenres, GenreEnum } from '../../../core/data/books';
import { BooksService } from '../../../core/services/booksService';
import { SortControl } from '../../../shared/components/sort-control/sort-control';
import { BookCardComponent } from '../book-card/book-card';

@Component({
  selector: 'books-panel',
  imports: [BookCardComponent, FormsModule, SortControl],
  templateUrl: './books-panel.html',
  styleUrl: './books-panel.less'
})
export class BooksPanel {

  private booksServcie: BooksService = BooksService.Service;

  protected isSeetingsCollapsed: boolean = true;

  protected books: Book[] = this.booksServcie.GetAllBooks();
  protected genres: GenreEnum[] = AllGenres;

  protected searchAuthorValue: string = '';
  protected searchTitleValue: string = '';
  protected searchYearValue: number | null = null;
  protected searchRatingValue: number = 0;
  protected searchGenreValue: GenreEnum | null = null;

  protected sortAuthorDirection: SortDirection = null;
  protected sortTitleDirection: SortDirection = null;
  protected sortYearDirection: SortDirection = null;
  protected sortRatingDirection: SortDirection = null;

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
    
    filters.push({FilterParam: 'author', FilterValue: this.searchAuthorValue});
    filters.push({FilterParam: 'title', FilterValue: this.searchTitleValue});
    filters.push({FilterParam: 'year', FilterValue: this.searchYearValue});
    filters.push({FilterParam: 'rating', FilterValue: this.searchRatingValue});
    filters.push({FilterParam: 'genres', FilterValue: this.searchGenreValue});

    orders.push({SortParam: 'author', SortDirection: this.sortAuthorDirection});
    orders.push({SortParam: 'title', SortDirection: this.sortTitleDirection});
    orders.push({SortParam: 'year', SortDirection: this.sortYearDirection});
    orders.push({SortParam: 'rating', SortDirection: this.sortRatingDirection});

    this.books = this.booksServcie.SearchBooks(filters, orders, 10, 0);
  }
}
