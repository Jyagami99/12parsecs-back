import {db} from '../db/database.js';
import { ObjectId} from 'mongodb';

export async function getProduct(request, response){

    const products = await db.collection('products').find().toArray();
    response.send(products);
}

export async function getProductId(request, response){
    const {id} = request.params;

    const product = await db.collection('products').findOne({_id: new ObjectId(id)});
    response.send(product);
}
