import { AllBooks } from '../mock/books.mock';
import { Book } from './books';

export type Ordering<T> = {
    SortParam: keyof T;
    SortDirection: 'asc' | 'desc';
};

export type Filtering<T> = {
    FilterParam: keyof T;
    FilterValue: any;
};

export class BooksProvider
{
    public static Provider: BooksProvider = new BooksProvider();
    private constructor()
    {}

    public GetAllBooks()
    {
        return [...AllBooks];
    }

    public SearchBooks(filters: Filtering<Book>[], orderBy: Ordering<Book>[], take: number, skip: number)
    {
        var books = [...AllBooks];
        for (let filter of filters)
        {
            if (filter.FilterParam === 'author')
            {
                books = books.filter(x => x.author.indexOf(filter.FilterValue) >= 0);
            }
            if (filter.FilterParam === 'title')
            {
                books = books.filter(x => x.title.indexOf(filter.FilterValue) >= 0);
            }
            if (filter.FilterParam === 'genres')
            {
                books = books.filter(x => x.genres.indexOf(filter.FilterValue) >= 0);
            }
            if (filter.FilterParam === 'rating')
            {
                books = books.filter(x => x.rating >= filter.FilterValue);
            }
            if (filter.FilterParam === 'year')
            {
                books = books.filter(x => x.year == filter.FilterValue);
            }
        }  

        return books;
    }
};