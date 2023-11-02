const mysql = require('mysql');

const configDB = {
  connectionLimit: 10,
  host: 'rds-curso.cfeaftyuibar.us-east-1.rds.amazonaws.com',
  user: 'Curso',
  password: 'Onicha96+',
  port: '3306',
  database: 'RDScurso',
  debug: true,
};

let pool = mysql.createPool(configDB);

module.exports = pool;

// Beneficios de trabajar con un pool de conexiones:

// Eficiencia: Los pools de conexiones permiten reutilizar conexiones existentes en lugar de abrir y cerrar conexiones constantemente. Esto reduce la sobrecarga de establecimiento y cierre de conexiones, lo que puede mejorar el rendimiento de la aplicación.

// Gestión automática: Los pools de conexiones manejan automáticamente aspectos como la creación, mantenimiento y cierre de conexiones, asegurando que se mantenga un número óptimo de conexiones abiertas en función de la carga de la base de datos.

// Escalabilidad: Al limitar el número de conexiones y manejarlas eficientemente, los pools de conexiones permiten que la aplicación sea más escalable y pueda manejar un mayor número de usuarios o solicitudes sin sobrecargar la base de datos.
