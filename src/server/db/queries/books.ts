import {Query} from '../index';

const getAll = () => Query('SELECT * FROM books');
const getOne = (id: string) => Query('SELECT * FROM books WHERE id = ?', [id])
const post = (title: string, author: string, categoryid: number, price: number) => Query('INSERT INTO books (title, author, categoryid, price) VALUES (?)', [[title, author, categoryid, price]])
const destroy = (id: string) => Query('DELETE FROM books WHERE id = ?', [id])
const update = (title: string, author: string, categoryid: number, price: number, id: number) => Query('UPDATE books SET title =?, author =?, categoryid =?, price =? WHERE id = ?', [title, author, categoryid, price, id])

export default {
    getAll,
    getOne,
    post,
    destroy,
    update
}