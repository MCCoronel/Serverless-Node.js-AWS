
let moment = require('moment-timezone');
moment.locale('es');

module.exports.GetMoment = async (event) => {
  try {
    let = tiempoSec = new Date().getTime(); //Esto lo que va a hacer es devolver la fecha en el formato UNIX
    let tiempoTZ = moment(tiempoSec).tz('America/Bogota').format(); //Esto lo que va a hacer es devolver la fecha en el formato de Colombia

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Exito!',
        data: {
          tiempoSec: tiempoSec,
          tiempoTZ: tiempoTZ,
        },
        input: event
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json' //para que me devuelva al respyesta en el mismo formato
      },
      body: JSON.stringify({
        success: false,
        message: 'Error',
        input: event,
        error: error.message
      }),
    };
  }
};
