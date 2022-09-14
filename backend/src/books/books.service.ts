import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Books } from "./book.entity";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private booksRepository: Repository<Books>
  ) {}

  async getBook(id: number): Promise<Books[]> {
    console.log("<><><>");
    return await this.booksRepository.find();
  }

  async readAll() {
    console.log("zzz");
    return await this.booksRepository.find();
  }

  async updateBook(book: Books) {
    this.booksRepository.save(book);
  }

  async deleteBook(book: Books) {
    this.booksRepository.delete(book);
  }

  async create(book: Books) {
    return await this.booksRepository.save(book);
  }
}
