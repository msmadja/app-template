
function execute(product) {
    
 return {...product, concat: `${product?.name}:${product?.price}`};
}


module.exports = {execute};