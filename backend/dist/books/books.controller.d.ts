import { BooksService } from "./books.service";
import { Books } from "./book.entity";
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getBook(params: any): Promise<Books[]>;
    read(): Promise<Books[]>;
    update(id: any, book: Books): Promise<void>;
    deleteBook(params: any): Promise<void>;
    createBooks(book: Books): Promise<Books>;
}
