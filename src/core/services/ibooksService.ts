import { InjectionToken } from "@angular/core";
import { Book } from "../data/books";
import { Filtering, Ordering } from "../paging";

export interface IBooksService
{
    GetAllBooks(): Book[];

    SearchBooks(filters: Filtering<Book>[], orderBy: Ordering<Book>[], take: number, skip: number): Book[];

    AddBook(book: Book): void;

    MarkBookAsFavorite(bookId: number, isFavorite: boolean): void;
}

export const IBooksServiceToken = new InjectionToken<IBooksService>('IBooksService');