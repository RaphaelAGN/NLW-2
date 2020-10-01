import { Request, Response } from 'express';
import db from '../database/connection';

export default class AccountsController {
    
    async create(request: Request, response: Response) {
        let {
            name,
            lastName,
            email,
            password
        } = request.body;

        const trx = await db.transaction();
    
        try {
            
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            const myPlaintextPassword = password;

            
            bcrypt.hash(myPlaintextPassword, saltRounds, async function(err: Error, hash: string) {
                if (err) {
                    throw err;
                } else {
                    await trx('accounts').insert({
                        name,
                        lastName,
                        email,
                        password: hash,
                    });
                    
                    await trx.commit();
                }
            });

            return response.status(201).send();

        } catch (err) {
            await trx.rollback(); //desfaz o que foi feito antes do erro no try
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}