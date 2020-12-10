import { Router } from 'express';
const router = Router();

// database connection
import { connect } from '../database';

// funcion para convertir un dato
import { ObjectID } from 'mongodb';

router.get('/', async (req, res) => {
    // antes de enviar una respuesta me voy a conectar a la db
    // esto me va a devolver una conexion a la base de datos
    const db = await connect();
    // esta conexion es la que me va a permitir hacer consultas
    // de esta coleccion queremos que busque todos los datos que existen, find
    // esto me va a retornar un resultado, lo guardo en una constante
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    // respondemos con un json con los datos de result
    res.json(result);
})

router.post('/', async (req, res) => {
    const db = await connect();
    
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    // una vez guardado los datos, genero una consulta a la db
    // antes de crear algo le tenemos que decir a que coleccion se lo vamos a asignar, luego guardamos la tarea
    const result = await db.collection('tasks').insertOne(task);
    // para obtener solo los datos que se ha insertado, le decimos que queremos acceder a la propiedad ops, a su arreglo en su indice cero
    res.json(result.ops[0]);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();

    // db consulta a la coleccion tasks y busca un solo dato por el id
    // mongodb consulta a un objeto y no a un string, por ende el id lo tenemos que pasar a objeto
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();

    // desde la coleccion de tareas vamos a eliminar algun dato por su id
    const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
    res.json({
        message: `Task ${id} deleted`,
        result
    });
})

export default router;