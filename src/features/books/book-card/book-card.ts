import { Component, EventEmitter, HostBinding, HostListener, inject, Input, Output } from '@angular/core';
import { Book } from '../../../core/data/books';
import { AppIfHighRating } from '../../../shared/directives/if-high-rating';
import { ArrayJoinPipe } from '../../../shared/pipes/join';
import { IBooksService, IBooksServiceToken } from '../../../core/services/ibooksService';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.html',
  styleUrl: './book-card.less',
  imports: [AppIfHighRating, ArrayJoinPipe]
})
export class BookCardComponent
{
  private booksService: IBooksService = inject(IBooksServiceToken);

  @Input()
  public book!: Book;

  @Output()
  public cardClick: EventEmitter<Book> = new EventEmitter<Book>();

  @HostBinding('class.active') 
  protected isActiveClass: boolean = false;

  @HostBinding('class.hover') 
  protected isHoverClass: boolean = false;

  @HostListener("click") 
  protected onClick()
  {
    this.isActiveClass = true;
    this.cardClick.emit(this.book);
  }

  @HostListener("mouseover") 
  protected onHover()
  {
    this.isHoverClass = true;
  }

  @HostListener("mouseleave") 
  protected onUnHover()
  {
    this.isHoverClass = false;
  }

  protected markFavorite(isFavorite: boolean, event: any)
  {
    this.booksService.markBookAsFavorite(this.book.id, isFavorite);
    event.stopPropagation();
  }
}
