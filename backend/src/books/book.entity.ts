import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Books {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column()
  bookName: string;

  @Column()
  author_id: number;

  @Column()
  genre: string;

  @Column()
  price: number;
}
