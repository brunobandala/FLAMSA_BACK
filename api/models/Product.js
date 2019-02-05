'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Producto para ORM
*/

module.exports = {

    attributes : {
        name : {type : 'string', required : true},
        type : {type : 'string', required : true},
        trailerType : {type : 'string', required : true,columnName:'trailer_type'},
        description : {type : 'string', required : false}
    },customToJSON : function(){
        return sails.config.globals.formatObject(this);
      }

};