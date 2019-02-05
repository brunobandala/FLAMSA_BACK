'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Schema de la entidad Usuario para ORM
*/

module.exports = {

    attributes : {
        name : {type : 'string', required : true},
        lastname : {type: 'string', required: true},
        RFC : {type: 'string', required: true},
        address : {type: 'string', required: true},
        phone : {type: 'number', required: true},
        email : {type: 'string', required: true},
        password : {type: 'string', required: true}
    },customToJSON : function(){
        return sails.config.globals.formatObject(this);
      }

};