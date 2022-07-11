import { db } from "../db/database.js";

export async function getCheckout(request, response) {
  const {user} = response.locals;
  try {
    const checkout = await db.collection("checkout").find({userId: user._id}).toArray();
    response.send(checkout);
  } catch (error) {
    console.log("checkout error", error);
    return response.sendStatus(500);
  }
}

export async function postCheckout(request, response) {
  const {user} = response.locals;
  const products = request.body;

  try{
    await db.collection('checkout').insertOne({...products, userId: user._id});
    response.sendStatus(200);
  }
  catch(erro){
      console.log('erro ao inserir um registro',erro);
  }

  // try {
  //   const product = request.body;
  //   await db.collection("checkout").insertOne({
  //     name:
  //     price:
  //     image:
  //   })
  // } catch (error) {}
}

export async function deleteCheckout(request, response) {
  try {
    const product = request.body;
  } catch (error) {}
}
