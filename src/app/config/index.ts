import dotenv from "dotenv";

// dotenv.config({ path: path.join((process.cwd(), '.env')) });
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
