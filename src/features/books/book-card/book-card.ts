import { Component, Input } from '@angular/core';
import { Book } from '../../../core/data/books';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.html',
  styleUrl: './book-card.less'
})
export class BookCardComponent
{
  @Input()
  public book!: Book;
}
