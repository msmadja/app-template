const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ 
    name: { 
        type: Number, 
        require: true
    }, 
    price: { 
        type: Number, 
        require: true
    },
    concat: { 
        type: String, 
    }
}); 
  
const Product = new mongoose.model("Product", productSchema);

module.exports =  Product;