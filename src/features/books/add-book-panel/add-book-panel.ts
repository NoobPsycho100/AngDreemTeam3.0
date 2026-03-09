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

  protected newBook: Book = {
    id: 0,
    author: '',
    title: '',
    year: 2026,
    rating: 0,
    genres: ['Детектив'],
    coverUrl: '',
    isFavorite: false,
  };

  @Output()
  public addBook = new EventEmitter<Book>();

  protected onSelectGenre(genre: string)
  {
    this.newBook.genres = [genre as GenreEnum];
  }

  protected onAddBook()
  {
    this.addBook.emit({...this.newBook});
  }
}
