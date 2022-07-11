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
export async function deleteCheckout(request, response) {
  try {
    const product = request.body;
  } catch (error) {}
}
