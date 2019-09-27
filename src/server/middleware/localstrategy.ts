import * as passport from 'passport';
import * as localstrategy from 'passport-local';

import {ComparePassword} from '../utils/security/password'
// import db from '../db';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new localstrategy.Strategy({
    usernameField: 'email',
    session: false
}, async(email, password, done) => {
    // try {
    //     let [author]: any = await db.users.findOneByEmail(email);
    //     if(author && ComparePassword(password, author.password)) {
    //         done(null, author)
    //     } else {
    //         done(null, false);
    //     }
    // } catch (error) {
    //     done(error)
    // }
}));