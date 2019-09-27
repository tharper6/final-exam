import {Router} from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let categories = await db.categories.All();
        res.json(categories)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.get('/:id', async (req, res) => {
    try {
        let [category]: any = await db.categories.One(req.params.id)
        res.json(category)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;