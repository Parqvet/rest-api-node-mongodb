import { Router } from 'express';
const router = Router();

// database connection
import { connect } from '../database';

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

export default router;