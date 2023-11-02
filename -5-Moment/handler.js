let moment = require('moment-timezone');
moment.locale('es');

module.exports.GetMoment = async (event) => {
  try{
    let tiempoSec = new Date().getTime();
    let tiempoTZ = moment.tz(tiempoSec, 'America/Mexico_City');

    let formato1 = moment(tiempoTZ).format('LT');   // 5:46 PM
    let formato2 = moment(tiempoTZ).format('LTS');  // 5:46:32 PM
    let formato3 = moment(tiempoTZ).format('L');    // 02/10/2021
    let formato4 = moment(tiempoTZ).format('l');    // 2/10/2021
    let formato5 = moment(tiempoTZ).format('LL');   // February 10, 2021
    let formato6 = moment(tiempoTZ).format('ll');   // Feb 10, 2021
    let formato7 = moment(tiempoTZ).format('LLL');  // February 10, 2021 5:46 PM
    let formato8 = moment(tiempoTZ).format('lll');  // Feb 10, 2021 5:46 PM
    let formato9 = moment(tiempoTZ).format('LLLL'); // Wednesday, February 10, 2021 5:46 PM
    let formato10 = moment(tiempoTZ).format('llll');

    return{
      statusCode:200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: '¡Exito!',
        data:{
          "timepoSec": tiempoSec,
          "tiempoTZ": tiempoTZ,
          "formato1": formato1 ,
          "formato2": formato2 ,
          "formato3": formato3 ,
          "formato4": formato4 ,
          "formato5": formato5 ,
          "formato6": formato6 ,
          "formato7": formato7 ,
          "formato8": formato8 ,
          "formato9": formato9 ,
          "formato10": formato10 









        }
      })
    }

  }catch(e){
    return{
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Hay un erroor',
        error: e.message
      })
    }

  }
};
