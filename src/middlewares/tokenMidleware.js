import {db} from '../db/database.js'

export default async function token(request, response, next){
    const {authorization} = request.headers;
    const token = authorization?.replace('Bearer ', '').trim();

    if(!token){
        return response.status(401).send('Não autorizado');
    }
    try{
        const session = await db.collection('sessions').findOne({token});
        if(!session){
            return response.status(401).send('Sessão nao existe');
        }

        const user = await db.collection('users').findOne({_id: session.userId});
        if(!user){
            return response.sendStatus(401);
        }
        delete user.password;
        response.locals.user = user;
    }
    catch(erro){
        return response.status(500).send('Token invalido');
    }
    next();
}