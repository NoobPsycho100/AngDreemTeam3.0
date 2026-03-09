import { AllBooks } from '../../mock/books.mock';
import { Book } from '../data/books';
import { SearchRequest, searchPage } from '../paging';

export class BooksService
{
    public static readonly Service: BooksService = new BooksService();
    private constructor()
    {}

    public GetAllBooks()
    {
        return [...AllBooks];
    }

    public SearchBooks(search: SearchRequest<Book>)
    {
        return searchPage([...AllBooks], search);
    }
};