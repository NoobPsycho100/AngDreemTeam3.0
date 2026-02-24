import { Component, HostBinding, QueryList, ViewChildren } from '@angular/core';
import { BookCardComponent } from './book-card';
import { BooksProvider } from '../../core/booksProvider';

@Component({
  selector: 'books-panel',
  imports: [BookCardComponent],
  templateUrl: './books-panel.html',
  styleUrl: './books-panel.less'
})
export class BooksPanel {

  private booksProvider: BooksProvider = BooksProvider.Provider;

  @HostBinding('class.collapsed')
  protected isCollapsed: boolean = false;

  protected showCopiright()
  {
    alert("©Copyleft by Noob Psycho, 2026")
  }

  protected getBooks()
  {
    return this.booksProvider.GetAllBooks();
  }
}
