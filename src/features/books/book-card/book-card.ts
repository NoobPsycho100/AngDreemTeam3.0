import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Book } from '../../../core/data/books';
import { AppIfHighRating } from '../../../shared/if-high-rating';
import { ArrayJoinPipe } from '../../../shared/pipes/join';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.html',
  styleUrl: './book-card.less',
  imports: [AppIfHighRating, ArrayJoinPipe]
})
export class BookCardComponent
{
  @Input()
  public book!: Book;

  @Output()
  public cardClick: EventEmitter<Book> = new EventEmitter<Book>();

  @HostListener("click") 
  protected onClick()
  {
    this.cardClick.emit(this.book);
  }
}
