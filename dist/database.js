"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// desde MongoCliente voy a usar el metodo connect para conectarme a una base de datos
// si la base de datos no existe el lo creera por nosotros
// const client = MongoClient.connect('mongodb://localhost:27017');
// client me va a devolver una conexion a mi base de datos local
// le decimos que se conecte a una db especifica, le pasamos el nombre
// client.db('')
// como la conexion es un proceso asincrono podria usar una promesa o async await
async function connect() {
  try {
    // como client va a tomar algo de tiempo le voy a decir await
    const client = await _mongodb.default.connect('mongodb://localhost:27017', {
      useUnifiedTopology: true
    });
    const db = client.db('node-restapi');
    console.log('DB is connected');
    return db;
  } catch (e) {
    console.log(e);
  }
} // una vez completada la funcion tengo que exportarla
// como estamos usando codigo asincrono podemos usar el manejador de errores try catch