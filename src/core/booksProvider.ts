import { AllBooks } from '../mock/books.mock';
import { Book } from './books';

export class BooksProvider
{
    public static Provider: BooksProvider = new BooksProvider();
    private constructor()
    {}

    public GetAllBooks()
    {
        return [...AllBooks];
    }
};