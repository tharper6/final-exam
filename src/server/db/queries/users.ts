import {Query} from '../index';

const getEmail = (email: string) => Query('SELECT * FROM users WHERE email = ?', [email]);
const getId = (id: string) => Query('SELECT * FROM users WHERE id = ?', [id]);
const insert = (email: string, password: string, name: string) => Query('INSERT INTO users (email, password, name)', [[email, password, name]]);

export default {
    getEmail,
    getId,
    insert
}