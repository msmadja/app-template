import productStore from "./Products.model";
import productsAccessor from "./Products.accessor";
import errorService from "../Shared/Error/Error.service";

class ProductsService {

get products$() { 
     return productStore.products;
}

  load = async () => { 
    try {
      const products = await productsAccessor.getProducts();
      productStore.setProducts(products);
    }
    catch (e)  {
      errorService.setError(e.message);
    }
    
  }

  addProduct = async ({ name, price }) => {
   try {
    const productAddDto = await productsAccessor.addProduct({name, price});
    if(productAddDto) { 
        productStore.addProduct({ name, price })
    }
   }
    catch (e) { 
      errorService.setError(e.message);
    }
  };

}

const productsService = new ProductsService();
export default productsService;