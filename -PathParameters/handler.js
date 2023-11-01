'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `La variable numero es: ${event.pathParameters.numero}`,
        multiplicado: `El numero miltiplicado por 2 es: ${Number(event.pathParameters.numero) * 2}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
