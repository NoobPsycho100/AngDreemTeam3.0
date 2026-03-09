import { Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Book } from '../../../core/data/books';
import { ArrayJoinPipe } from '../../../shared/pipes/join';

@Component({
  selector: 'book-details-dialog',
  templateUrl: './book-details-dialog.html',
  styleUrl: './book-details-dialog.less',
  imports: [ArrayJoinPipe]
})
export class BookDetailsDialogComponent
{
  @ViewChild('bookDialog') 
  private bookDialog!: ElementRef<HTMLDialogElement>;

  @ViewChild('cardTemplate', { read: TemplateRef })
  private cardTemplate!: TemplateRef<any>;

  @ViewChild('cardContainer', { read: ViewContainerRef })
  private cardContainer!: ViewContainerRef;

  public ShowDialog(book: Book)
  {
    this.cardContainer.createEmbeddedView(this.cardTemplate, { book: book });
    this.bookDialog.nativeElement.showModal();
  }

  public CloseDialog()
  {
    this.bookDialog.nativeElement.close();
    this.cardContainer.clear();
    this.dialogClose.emit();
  }

  @Input()
  public book!: Book;

  @Output()
  public dialogClose: EventEmitter<any> = new EventEmitter();

  @HostListener("window:keydown.escape") 
  protected onClick()
  {
    this.CloseDialog();
  }
}
