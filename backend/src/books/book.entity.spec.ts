import { books } from './book.entity';

describe('BookEntity', () => {
  it('should be defined', () => {
    expect(new books()).toBeDefined();
  });
});
