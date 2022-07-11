import { db } from "../db/database.js";

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


export async function postCheckout(req, res) {
  const { error } = checkoutSchema.validate(req.body);
  if(error){
      return res.sendStatus(422);
  }
  const {usuario} = res.locals;
  try {
      req.body.map((response) => {
        const {price, name, image} = response;
        let arr = [...arr, {price, name, image, userId: usuario._id}]
      })
      await db.collection("checkout").insertOne(arr);
      res.sendStatus(201);

  } catch (error) {
      console.log("Erro ao adicionar nova atividade", error);
      return res.sendStatus(500);
  }
}