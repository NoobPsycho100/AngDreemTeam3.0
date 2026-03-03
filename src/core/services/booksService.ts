import { AllBooks } from '../../mock/books.mock';
import { Book } from '../data/books';
import { Filtering, Ordering } from '../paging';

export class BooksService
{
    public static Service: BooksService = new BooksService();
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
};