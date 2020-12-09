import { Router } from 'express';
const router = Router();

// database connection


router.get('/', (req, res) => {
    res.send('Tasks');
})

export default router;