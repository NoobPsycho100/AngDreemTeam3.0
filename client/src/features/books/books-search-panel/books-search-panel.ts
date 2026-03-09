import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Ordering, SearchRequest, SortDirection } from '../../../core/paging';
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
  protected searchGenreValue: GenreEnum | null | '' = null;

  protected sortAuthorDirection: SortDirection = null;
  protected sortTitleDirection: SortDirection = null;
  protected sortYearDirection: SortDirection = null;
  protected sortRatingDirection: SortDirection = null;

  @Output()
  public search = new EventEmitter<SearchRequest<Book>>();

  protected onSelectGenre(genre: string)
  {
    this.searchGenreValue = genre as GenreEnum | null | '';
  }

  protected onSearch()
  {
    let filters: ((x: Book) => boolean)[] = [];
    let orders: Ordering<Book>[] = [];
    
    if (this.searchAuthorValue)
      filters.push(x => x.author.indexOf(this.searchAuthorValue) >= 0);
    if (this.searchTitleValue)
      filters.push(x => x.title.indexOf(this.searchTitleValue) >= 0);
    if (this.searchYearValue)
      filters.push(x => x.year == this.searchYearValue);
    if (this.searchRatingValue)
      filters.push(x => x.rating >= this.searchRatingValue);
    if (this.searchGenreValue != null && this.searchGenreValue != '')
      filters.push(x => x.genres.indexOf(this.searchGenreValue as GenreEnum) >= 0);

    orders.push({sortParam: 'author', sortDirection: this.sortAuthorDirection});
    orders.push({sortParam: 'title', sortDirection: this.sortTitleDirection});
    orders.push({sortParam: 'year', sortDirection: this.sortYearDirection});
    orders.push({sortParam: 'rating', sortDirection: this.sortRatingDirection});

    this.search.emit({ filters: filters, orders: orders, skip: 0, take: 10 });
  }
}
