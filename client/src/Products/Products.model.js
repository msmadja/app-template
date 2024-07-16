import { makeObservable, observable, action } from "mobx"

class ProductsStore { 
  products = [];

  constructor() { 
     makeObservable(this, { 
        products: observable, 
        addProduct: action, 
        setProducts: action
     });
  }

  addProduct(product) { 
     this.products.push(product);
  }

  setProducts(products = []) { 
     this.products = [...products];
  }
}

const productStore = new ProductsStore();
export default productStore;