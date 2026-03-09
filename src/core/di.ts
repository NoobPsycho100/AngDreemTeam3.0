import { Provider } from "@angular/core";
import { IBooksServiceToken } from "./services/ibooksService";
import { BooksService } from "./services/booksService";

export const DIProviders: Provider[] = [
    { provide: IBooksServiceToken, useClass: BooksService }
];