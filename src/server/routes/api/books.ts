import {Router} from 'express';
import db from '../../db'
import {isAdmin} from '../../middleware/authCheckpoints'

const router = Router();

router.get('/', async (req, res) => {
    try {
        let books = await db.books.All();
        res.json(books)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.get('/:id', async (req, res) => {
    try {
        let [book]: any = await db.books.One(req.params.id)
        res.json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.post('/', isAdmin, async (req, res) => {
    try {
        let book = await db.books.Post(req.body.title, req.body.author, req.body.categoryid, req.body.price);
        res.json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.delete('/:id', isAdmin,  async (req, res) => {
    try {
        let book = await db.books.Delete(req.params.id)
        res.json('Deleted!')
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    try {
        let book = await db.books.Edit(req.body.title, req.body.author, req.body.categoryid, req.body.price, req.params.id)
        res.json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;