import { InjectionToken } from "@angular/core";
import { Book } from "../data/books";
import { SearchRequest } from "../paging";

export interface IBooksService
{
    getAllBooks(): Book[];

    searchBooks(search: SearchRequest<Book>): Book[];

    addBook(book: Book): void;

    markBookAsFavorite(bookId: number, isFavorite: boolean): void;
}

export const IBooksServiceToken = new InjectionToken<IBooksService>('IBooksService');