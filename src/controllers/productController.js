import { db } from "../db/database.js";
import { ObjectId } from "mongodb";

export async function getProduct(request, response) {
  try {
    const products = await db.collection("products").find().toArray();
    response.send(products);
  } catch (error) {
    console.log("product error", error);
    return res.sendStatus(500);
  }
}

export async function getProductId(request, response) {
  const { id } = request.params;
  try {
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
    response.send(product);
  } catch (error) {
    console.log("id error", error);
    return res.sendStatus(500);
  }
}
