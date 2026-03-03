import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Search, SortDirection } from '../../../core/paging';
import { Book, AllGenres, GenreEnum } from '../../../core/data/books';
import { BooksService } from '../../../core/services/booksService';
import { BookCardComponent } from '../book-card/book-card';
import { BooksSearchPanel } from '../books-search-panel/books-search-panel';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog';
import { AddBookPanel } from '../add-book-panel/add-book-panel';

@Component({
  selector: 'books-panel',
  imports: [NgIf, FormsModule, BookCardComponent, BooksSearchPanel, AddBookPanel, BookDetailsDialogComponent],
  templateUrl: './books-panel.html',
  styleUrl: './books-panel.less'
})
export class BooksPanel
{
  private booksServcie: BooksService = BooksService.Service;

  protected isSeetingsCollapsed: boolean = true;
  protected isAddingCollapsed: boolean = true;

  protected books: Book[] = this.booksServcie.GetAllBooks();

  @ViewChild("bookDialog") 
  private bookDialog!: BookDetailsDialogComponent;

  @ViewChild('newCardTemplate', { read: TemplateRef })
  private newCardTemplate!: TemplateRef<any>;

  @ViewChild('newCardsContainer', { read: ViewContainerRef })
  private newCardsContainer!: ViewContainerRef;

  protected collapseSettings()
  {
    this.isSeetingsCollapsed = !this.isSeetingsCollapsed;
  }

  protected collapseAdding()
  {
    this.isAddingCollapsed = !this.isAddingCollapsed;
  }

  protected onSearch(search: Search<Book>)
  {
    this.books = this.booksServcie.SearchBooks(search.Filters, search.Orders, search.Take, search.Skip);
  }

  protected onCardClick(book: Book)
  {
    this.bookDialog.ShowDialog(book);
  }

  protected onAddBook(book: Book)
  {
    this.newCardsContainer.createEmbeddedView(this.newCardTemplate, { book: book });
  }
}
