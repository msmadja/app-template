import { observer } from "mobx-react"
import productsService from "./Products.service";
import { useEffect } from "react";

const Products = observer(() => { 

 useEffect(() => { 
     productsService.load();
 }, [])

 return (
  <>
  <div>
    Products
    {productsService.products$?.map(v => <div>{v.name}: {v.price}</div>)}
 </div>
 <button onClick={() => productsService.addProduct({name: Date.now(), price: Date.now()})}>Add</button>
 </>
 )
})

export default Products;