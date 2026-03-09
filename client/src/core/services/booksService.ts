import { Injectable } from '@angular/core';
import { AllBooks } from '../../mock/books.mock';
import { Book } from '../data/books';
import { SearchRequest, searchPage } from '../paging';
import { IBooksService } from './ibooksService';

@Injectable()
export class BooksService implements IBooksService
{
    private allBooks: Book[] = AllBooks;

    public getAllBooks()
    {
        return [...this.allBooks];
    }

    public searchBooks(search: SearchRequest<Book>)
    {
        return searchPage([...AllBooks], search);
    }

    public addBook(book: Book)
    {
        this.allBooks = [...this.allBooks, book];
    }

    public markBookAsFavorite(bookId: number, isFavorite: boolean)
    {
        let [book] = this.allBooks.filter(x => x.id === bookId);
        if (!!book)
        {
            book.isFavorite = isFavorite;
        }
    }
};