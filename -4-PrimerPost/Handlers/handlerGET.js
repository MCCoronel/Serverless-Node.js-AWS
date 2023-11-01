'use strict';

module.exports.servicioGET = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Servicio GET',
        input: event,
      },
      null,
      2
    ),
  };

};