import app from "./app.js";      
import "./database.js";           
import dotenv from "dotenv";
import { config } from "./config.js";

dotenv.config();

async function main() {
  const port = config.server.port || 4000;
  app.listen(port, () => {
    console.log(`Server corriendo en http://localhost:${port}`);
  });
}

main();
