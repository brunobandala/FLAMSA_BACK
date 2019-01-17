'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Controller con la definición de los servicios de Productos
*/

var createProduct = async function(req,res){
    sails.log("starting createProduct method");
    var product = req.body;

    if(product.name === undefined){
       return res.badRequest("username is required");
    }
    if(product.type === undefined){
        return res.badRequest("type is required");
    }
    if(product.trailerType === undefined){
        return res.badRequest("trailerType is required");
    }
    
    var response = await ProductService.createProduct(product);

    return res.json(response);
    sails.log("createProduct method finished....");
};

var getProduct = async function(req,res){
    sails.log("starting getProduct method");
    var productId = req.param("productId");
    var product   = null;

    ProductService.readProduct(productId)
    .then(response =>{
        res.json(response);
    })
    .catch(error =>{
        res.conflictException(error);
    });

    sails.log("getProduct method finished");
};

module.exports = {
    "createProduct" : createProduct,
    "getProduct" : getProduct
};