'use strict';

const pool = require('../connection');

module.exports.RDSupdate =(event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  // Parse el cuerpo del evento como JSON directamente
  const body = JSON.parse(event.body);

  const sqlCreate ={
    USUARIO: body.Usuario,
    NOMBRE:body.Nombre
  }

 console.log('sqlCreate:', sqlCreate);

  const sql = `INSERT INTO usuarios SET ?`; //El signo de pregunta hace que se sustituyan los valores en esa posicion
  console.log('sql:', sql);
 console.log('pool.getConnection:', pool.getConnection);

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query(sql,[sqlCreate],function (error, results) {
      if (error) {
        callback({
          statusCode: 400,
          headers: {
            'Content-Type': 'application/json',
          },
          body: context.fail(
            JSON.stringify({
              success: false,
              message: error,
            })
          ),
        });
      } else {
        callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            success: true,
            message: '¡Exito al insertar!',
            data: results,
          }),
        });
        connection.release();
      }
    });
  });
};
