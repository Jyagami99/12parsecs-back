import { db } from "../db/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  try {
    const salt = 10;
    const user = await db.collection("users").findOne({ email });
    if (user) {
      return response
        .status(404)
        .send({ message: "Este usuário já está cadastrado" });
    }
    await db.collection("users").insertOne({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.sendStatus(201);
  } catch (e) {
    console.log("Sign-up error", e);
    return res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  try {
    const user = await db
      .collection("users")
      .findOne({ email: req.body.email });
    if (!user) {
      return res.sendStatus(404);
    }
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({
        userId: user._id,
        token,
      });
      return res.send({ token, name: user.name });
    }
    return res.sendStatus(404);
  } catch (e) {
    console.log("Sign-in error", e);
    return res.sendStatus(500);
  }
}
