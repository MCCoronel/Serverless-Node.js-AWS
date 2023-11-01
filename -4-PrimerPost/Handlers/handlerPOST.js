'use strict';

module.exports.servicioPOST = async (event, context, callback) => { //event=> todos los elementos que van a estar en transito con la request , context=> esto es para declarar como va a estar funcionando nuestra lamba o como debería de estar funcionando, callback=> es la respuesta

    context.callbackWaitsForEmptyEventLoop = false;  //Esto indica a la funcion que termine o no la ejecucion una vez que se tenga la respuesta

    let timestamp = new Date().getTime();
    const body = JSON.parse(event.body);
    let fecha = timestamp;
    let nombre= body.nombre;
    let apellido= body.apellido;
    let numero  = body.numero || null;

    if(!nombre || !apellido){
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    success: false,
                    message: 'Debe completas todos los datos obligatorios',
                    input: event,
                },
                null,
                2
            ),
        })
    }

    if(numero === null || numero === undefined || numero===0 || isNaN(numero) === true){
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    success: false,
                    message: 'El numero es invalido',
                    input: event,
                },
                null,
                2
            ),
        })
    }else{
        numero = numero * 100
        callback(null, {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    success: true,
                    message: 'El numero multiplicado por 100 es: ' + numero,
                    data:{
                        nombre: nombre,
                        apellido: apellido,
                        fecha: fecha,
                        numero: numero
                    },
                    input: event,
                },
            ),
        })
    }

};
