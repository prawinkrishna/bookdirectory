import { Repository } from "typeorm";
import { Books } from "./book.entity";
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Books>);
    getBook(id: number): Promise<Books[]>;
    readAll(): Promise<Books[]>;
    updateBook(book: Books): Promise<void>;
    deleteBook(book: Books): Promise<void>;
    create(book: Books): Promise<Books>;
}
