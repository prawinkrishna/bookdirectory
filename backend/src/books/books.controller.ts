import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { Books } from "./book.entity";

@Controller("books")
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get(":id")
  getBook(@Param() params) {
    return this.booksService.getBook(params.id);
  }

  @Get()
  read() {
    return this.booksService.readAll();
  }
  //   @Post()
  //   create(@Body() user: book) {
  //     return this.service.create(user);
  //   }

  // @Put(':id')
  // updateBook(@Param() book: Books) {
  //   return this.booksService.updateBook(book);
  // }

  @Put(":id")
  async update(@Param("id") id, @Body() book: Books) {
    book.book_id = Number(id);
    return this.booksService.updateBook(book);
  }

  @Delete(":id")
  deleteBook(@Param() params) {
    return this.booksService.deleteBook(params.id);
  }

  @Post()
  async createBooks(@Body() book: Books) {
    return this.booksService.create(book);
  }
}
