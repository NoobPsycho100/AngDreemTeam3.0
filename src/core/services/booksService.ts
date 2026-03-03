import { Injectable } from '@angular/core';
import { AllBooks } from '../../mock/books.mock';
import { Book } from '../data/books';
import { Filtering, Ordering } from '../paging';
import { IBooksService } from './ibooksService';

@Injectable()
export class BooksService implements IBooksService
{
    private allBooks: Book[] = AllBooks;

    public GetAllBooks()
    {
        return [...this.allBooks];
    }

    public SearchBooks(filters: Filtering<Book>[], orderBy: Ordering<Book>[], take: number, skip: number)
    {
        var books = [...this.allBooks];
        for (let filter of filters)
        {
            if (filter.FilterParam === 'author' && filter.FilterValue)
            {
                books = books.filter(x => x.author.indexOf(filter.FilterValue) >= 0);
            }
            if (filter.FilterParam === 'title' && filter.FilterValue)
            {
                books = books.filter(x => x.title.indexOf(filter.FilterValue) >= 0);
            }
            if (filter.FilterParam === 'genres' && filter.FilterValue)
            {
                books = books.filter(x => x.genres.indexOf(filter.FilterValue) >= 0);
            }
            if (filter.FilterParam === 'rating' && filter.FilterValue)
            {
                books = books.filter(x => x.rating >= filter.FilterValue);
            }
            if (filter.FilterParam === 'year' && filter.FilterValue)
            {
                books = books.filter(x => x.year == filter.FilterValue);
            }
        }

        //debugger;

        for (let order of orderBy)
        {
            let direction = order.SortDirection === 'desc' ? -1 : 1;

            if (order.SortParam === 'author' && order.SortDirection)
            {
                books = books.sort((x, y) => direction * (x.author > y.author ? 1 : -1));
            }
            if (order.SortParam === 'title' && order.SortDirection)
            {
                books = books.sort((x, y) => direction * (x.title > y.title ? 1 : -1));
            }
            if (order.SortParam === 'rating' && order.SortDirection)
            {
                books = books.sort((x, y) => direction * (x.rating > y.rating ? 1 : -1));
            }
            if (order.SortParam === 'year' && order.SortDirection)
            {
                books = books.sort((x, y) => direction * (x.year > y.year ? 1 : -1));
            }
        }

        return books;
    }

    public AddBook(book: Book)
    {
        this.allBooks = [...this.allBooks, book];
    }

    public MarkBookAsFavorite(bookId: number, isFavorite: boolean)
    {
        for (let book of this.allBooks)
        {
            if (book.id === bookId)
                book.isFavorite = isFavorite;
        }
    }
};