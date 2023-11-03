'use strict';

const pool = require('../connection');

module.exports.RDSTestConnection =(event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = 'SELECT 1+1';
  console.log('sql:', sql);
  console.log('pool.getConnection:', pool.getConnection);
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query(sql, function (error, results) {
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
            message: '¡Exito!',
            data: results,
          }),
        });
        connection.release();
      }
    });
  });
};
