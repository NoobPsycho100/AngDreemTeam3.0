import { InjectionToken } from "@angular/core";
import { Book } from "../data/books";
import { Filtering, Ordering } from "../paging";

export interface IBooksService
{
    GetAllBooks(): Book[];

    SearchBooks(filters: Filtering<Book>[], orderBy: Ordering<Book>[], take: number, skip: number): Book[];
}

export const IBooksServiceToken = new InjectionToken<IBooksService>('IBooksService');