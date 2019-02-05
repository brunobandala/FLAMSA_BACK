'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Policy para el control de sesiones de forma básica
*/

module.exports = async function (req, res, proceed) {

    if (req.session.userId) {
      req.body = sails.config.globals.formatObject(req.body);
      return proceed();
    }
  
    return res.forbiddenException();
  
  };