import dotenv from 'dotenv';
import db from '../db/database.js';
import {v4 as uuidv4} from 'uuid';
dotenv.config();

export async function signUp(request, response){
    const {name, email, password} = request.body;

    try{
        const user = await db.collection('users').findOne({email});
        if(user){
            return response.status(404).send({message: 'Este usuário já está cadastrado'});
        }
        const novoUser = await db.collection('users').insertOne({
            name, email, password
        });
        response.status(200).send({message: 'Usuário cadastrado'});
    }
    catch(erro){
        console.log(erro);
    }
}

export async function signIn(request, response){
    try{
        const {email, password} = request.body;
        const user = await db.collection('users').findOne({email});
        if(user && password == user.password){
            const token = uuidv4();
            
            await db.collection('sessions').insertOne({
                userId: user._id,
                token,
                lastStatus: Date.now()
            });
            console.log(token);
            response.status(200).send({name: user.name, token });
        }
        else{
            response.status(401).send({message: 'campos invalidos'});
        }
    }
    catch(erro){
        console.log(erro);
    }
}