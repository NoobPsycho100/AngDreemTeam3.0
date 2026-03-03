import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Book } from '../../../core/data/books';
import { AppIfHighRating } from '../../../shared/if-high-rating';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.html',
  styleUrl: './book-card.less',
  imports: [AppIfHighRating]
})
export class BookCardComponent
{
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
}
