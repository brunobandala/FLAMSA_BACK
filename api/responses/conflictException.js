'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Definición para exepcion ocasionada por conflictos con el programa.
*/

module.exports = function conflictException(errorInfo) {

  var req = this.req;
  var res = this.res;
  var error = {};
  error.status = 409;

  if (errorInfo === undefined) {
    sails.log.info('Ran custom response: res.conflictException()');
    return res.sendStatus(error.status);
  }

  else if (_.isError(errorInfo)) {
    sails.log.info('Custom response `res.conflictException()` called with an Error:', errorInfo);

    if (!_.isFunction(errorInfo.toJSON)) {
        error.stackTrace = errorInfo.stack;
        error.message = errorInfo.message;
        return res.status(error.status).send(error);      
    }
  }
  else {
    error.message = errorInfo;
    return res.status(error.status).send(error);
  }

};
