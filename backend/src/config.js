// backend/src/config.js
import dotenv from "dotenv";
dotenv.config();

export const config = {
  db: {
    URI: process.env.DB_URI ||
"mongodb+srv://claudiamariadream:Jeremias333.@cluster1b.kz0sl.mongodb.net/GlamFashion?retryWrites=true&w=majority&appName=Cluster1B"
  },
  server: {
    port: process.env.PORT || 4000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secreto123",
    expiresIn: process.env.JWT_EXPIRES_IN || "30d",
  },
  email: {
    email: "glamfashioncar@gmail.com",
    password: process.env.APP_PASSWORD_EMAIL,
  },
  admin: {
    email: process.env.ADMIN_EMAIL,       
    password: process.env.ADMIN_PASSWORD, 
  },
  paypal: {
    clientId: process.env.PAYPAL_API_CLIENT_ID,
    clientSecret: process.env.PAYPAL_API_SECRET,
    PAYPAL_API: "https://api-m.sandbox.paypal.com/",
  },
};
