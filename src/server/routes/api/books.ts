import {Router} from 'express';
import db from '../../db'

const router = Router();

router.get('/', async (req, res) => {
    try {
        let result = await db.books.getAll();
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.get('/:id', async (req, res) => {
    try {
        let result = await db.books.getOne(req.params.id);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.post('/', async (req, res) => {
    try {
        let result = await db.books.post(req.body.title, req.body.author, req.body.categoryid, req.body.price);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let result = await db.books.destroy(req.params.id);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.put('/:id', async (req, res) => {
    try {
        let result = await db.books.update(req.body.title, req.body.author, req.body.categoryid, req.body.price, req.params.id);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;