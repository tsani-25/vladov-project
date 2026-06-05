const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
    host: "db",
    user: "postgres",
    password: "postgres",
    database: "testdb",
    port: 5432
});

client.connect()
.then(() => console.log("Connected to PostgreSQL"))
.catch(err => console.error(err));

app.get("/", async (req, res) => {
    try {
        const result = await client.query("SELECT NOW()");
        res.send(`Database time: ${result.rows[0].now}`);
    } catch (err) {
        res.send(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
