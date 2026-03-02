import { Component, Input } from '@angular/core';
import { Book } from '../../core/books';
import { AppIfHighRating } from '../../shared/if-high-rating';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.html',
  styleUrl: './book-card.less',
  imports: [AppIfHighRating]
})
export class BookCardComponent {

  @Input()
  public book!: Book;
}
