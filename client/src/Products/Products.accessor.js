import apiGateway from "../Shared/ApiGateway/ApiGateway.service";

class ProductsAccessor { 

  async getProducts() { 
    const getProductsResponse = await apiGateway.get('/products');
    return getProductsResponse;
  }

  async addProduct({name, price})  { 
    const getProductsResponse = await apiGateway.post('/products', {name, price});
    return getProductsResponse;
  }
}

const productsAccessor = new ProductsAccessor();
export default productsAccessor;