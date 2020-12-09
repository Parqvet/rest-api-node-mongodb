import MongoClient from "mongodb";

// desde MongoCliente voy a usar el metodo connect para conectarme a una base de datos
// si la base de datos no existe el lo creera por nosotros
// const client = MongoClient.connect('mongodb://localhost:27017');

// client me va a devolver una conexion a mi base de datos local
// le decimos que se conecte a una db especifica, le pasamos el nombre
// client.db('')

// como la conexion es un proceso asincrono podria usar una promesa o async await
export async function conect() {
    try {
        // como client va a tomar algo de tiempo le voy a decir await
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('node-restapi');
        return db;
    } catch(e) {
        console.log(e);
    }
}

// una vez completada la funcion tengo que exportarla
// como estamos usando codigo asincrono podemos usar el manejador de errores try catch