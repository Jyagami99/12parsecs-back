import { db } from "../db/database.js";

export async function getCheckout(request, response) {
  try {
    const checkout = await db.collection("checkout").find().toArray();
    response.send(checkout);
  } catch (error) {
    console.log("checkout error", error);
    return res.sendStatus(500);
  }
}

export async function postCheckout(request, response) {
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
