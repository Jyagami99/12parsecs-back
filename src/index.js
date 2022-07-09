import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routerProduct from './routes/productsRoute.js'


async function main() {
  dotenv.config();

  const app = express();

  app.use(cors());
  app.use(json());


  app.use(routerProduct);



  const PORT = process.env.PORT || 4444;

  app.listen(PORT, () => {
    console.log(`O servidor subiu na porta ${PORT}`);
  });
}
main().catch(console.error);
