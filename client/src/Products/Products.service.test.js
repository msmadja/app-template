import productService from './Products.service';
import productAccessor from './Products.accessor';

jest.mock('./Products.accessor');

describe('ProductsService', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('loads products successfully', async () => {
    await productService.load();
    expect(productAccessor.getProducts).toHaveBeenCalledTimes(1);
  });

  test('adds a product successfully', async () => {
    const newBook = { name: 'New Book', price: 'New Author' };
    await productService.addProduct(newBook);
    expect(productAccessor.addProduct).toHaveBeenCalledTimes(1);
    expect(productAccessor.addProduct).toHaveBeenCalledWith(newBook);
  });
});