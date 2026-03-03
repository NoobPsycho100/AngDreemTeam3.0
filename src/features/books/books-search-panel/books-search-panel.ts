import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Filtering, Ordering, Search, SortDirection } from '../../../core/paging';
import { Book, AllGenres, GenreEnum } from '../../../core/data/books';
import { SortControl } from '../../../shared/components/sort-control/sort-control';

@Component({
  selector: 'books-search-panel',
  imports: [FormsModule, SortControl],
  templateUrl: './books-search-panel.html',
  styleUrl: './books-search-panel.less'
})
export class BooksSearchPanel
{
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

  @Output()
  public search = new EventEmitter<Search<Book>>();

  protected onSelectGenre(genre: string)
  {
    this.searchGenreValue = genre as GenreEnum | null;
  }

  protected onSearch()
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

    this.search.emit({Filters: filters, Orders: orders, Skip: 0, Take: 10});
  }
}
