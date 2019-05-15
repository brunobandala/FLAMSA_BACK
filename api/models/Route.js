'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Ruta para ORM
*/

module.exports = {

    attributes : {
        name : {type : 'string', required : true},
        stretches : { type: 'json', columnType: 'array', required : true },
        distance : {type : 'string', required : true}
    },customToJSON : function(){
        return sails.config.globals.formatObject(this);
      }

};