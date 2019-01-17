'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Servicios destinados a la interacción con Productos
*/

var createProduct = async function(product){
    sails.log("starting createProduct method");
    var response = await Product.create(product).fetch();
    return response;
    sails.log("createProduct method finished!....");
};

var readProduct = async function(productId){
    sails.log("starting getProduct method");
    var product = await Product.findOne({id : productId});
    if(!product){
        throw new Error("invalid ProductId");
    }else{
        return product;
    }
    sails.log("getProduct finished");
};

var updateProduct = async function(productId, data){
    sails.log("starting updateProduct method");
    var product = await Product.update({id:productId}).set(data);
    sails.log("updateProduct method finished!....");
};

var deleteProduct = async function(productId){
    sails.log("starting deleteProduct method");
    var product = await Product.destroyOne({id:productId});
    sails.log("deleteProduct finished");

};

module.exports = {
    "createProduct" : createProduct,
    "readProduct" : readProduct,
    "updateProduct" : updateProduct,
    "deleteProduct" : deleteProduct
};