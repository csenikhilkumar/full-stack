import { Client } from "pg";
import { POSTGRESS_URI } from "./config";
import express from "express";
const client = new Client(POSTGRESS_URI);

const app = express();
app.use(express.json());
app.post("/signUp", async function (req, res) {
  const { username, email, password } = req.body;
  try {
    const insertQuery = `INSERT INTO users (username, email, password) VALUES 
      ($1,$2,$3);`
    const result = await client.query(insertQuery,[username,email,password])



    console.log(result.rows);
    res.json({ message: "User successfully signed up" });
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).json({ error: "Failed to sign up user" });
  }
});
async function main (){
await client.connect();
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
}
main()