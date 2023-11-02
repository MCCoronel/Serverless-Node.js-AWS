const pool = require('../connection');

module.exports.RDSTestConnection = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = 'SELECT 1+1';

  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!
    connection.query(sql, function (error, results, fields) {
      //connection.release();
      if (error) {
        callback({
          statusCode: 400,
          headers: {
            'Content-Type': 'application/json',
          },
          body: context.failure(
            JSON.stringify({
              success: false,
              message: 'Error al ejecutar la consulta',
              input: event,
            })
          ),
        });
      } else {
        callback(null, {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: context.success(
            JSON.stringify({
              success: true,
              message: 'Consulta exitosa',
              data: results,
            })
          ),
        });
        connection.release(); //Libera la conexion, porque estamos trabajando con una pool de peticiones, por lo tanto hay que liberarla para que pueda vovler a reutilizarse
      }
    });
  });
};
