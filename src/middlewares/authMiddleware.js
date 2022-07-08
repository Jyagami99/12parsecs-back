import {signUp} from '../schemas/authSchemas.js';

export default function signUpMiddleware(request, response, next){
    const valida = signUp.validate(request.body, {abortEarly: false});

    if(valida.error){
        return response.status(400).send(valida.error.details.map((erro) => erro.message));
    }
    next();
}