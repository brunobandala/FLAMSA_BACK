'use strict';

/** 
 * @author Erick_Ismael_López_Ferrari
 * @description Definición para excepcion ocasionada por conflictos al cargar un archivo.
*/

module.exports = function fileUploadException(errorInfo) {

  var req = this.req;
  var res = this.res;
  var error = {};
  error.status = 409;

  if (errorInfo === undefined) {
    sails.log.info('Ran custom response: res.fileUploadException()');
    return res.sendStatus(error.status);
  }

  else if (_.isError(errorInfo)) {
    sails.log.info('Custom response `res.fileUploadException()` called with an Error:', errorInfo);

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
