import {Query} from '../../db';

const getAll = () => Query('SELECT * FROM categories')
const getOne = (id: number) => Query('SELECT * FROM categories WHERE id = ?', [id])

export default {
    getAll,
    getOne
}