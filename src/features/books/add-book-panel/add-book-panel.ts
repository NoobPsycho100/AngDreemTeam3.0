import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Book, AllGenres, GenreEnum } from '../../../core/data/books';

@Component({
  selector: 'add-book-panel',
  imports: [FormsModule],
  templateUrl: './add-book-panel.html',
  styleUrl: './add-book-panel.less'
})
export class AddBookPanel
{
  protected isSeetingsCollapsed: boolean = true;

  protected genres: GenreEnum[] = AllGenres;

  protected authorValue: string = '';
  protected titleValue: string = '';
  protected yearValue: number = 2026;
  protected ratingValue: number = 0;
  protected genreValue: GenreEnum = 'Детектив';
  protected coverUrlValue: string = '';

  @Output()
  public addBook = new EventEmitter<Book>();

  protected onSelectGenre(genre: string)
  {
    this.genreValue = genre as GenreEnum;
  }

  protected onAddBook()
  {
    this.addBook.emit({
      id: 0,
      title: this.titleValue,
      author: this.authorValue,
      year: this.yearValue,
      genres: [this.genreValue],
      rating: this.ratingValue,
      coverUrl: this.coverUrlValue,
      isFavorite: false,
    });
  }
}
