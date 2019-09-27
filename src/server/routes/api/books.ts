import {Router} from 'express';
import db from '../../db'

const router = Router();

router.get('/', async (req, res) => {
    try {
        let result = await db.books.getAll();
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;