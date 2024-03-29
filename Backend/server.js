const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use( cors() );

const db = mysql.createConnection({
    host: "localhost", // TODO: find host for database on web server!
    user: "axios",
    password: "AxiosAccess4276",
    database: "inhere"
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
        process.exit(1);
    }
    console.log("MySQL database connected!");
});

app.post('/signUp', (req, res) => {

    const sql = "INSERT INTO User (`Email`, `Username`, `Password`, `Salt`) VALUES (?,?,?,?)";

    const values = [
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.salt
    ];

    db.query(sql, values, (err, result) => {
        if(err)
        {
            console.error("Error inserting data into the database:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        console.log("Data inserted into the database:", result);
        return res.status(200).json({ message: "Data inserted successfully" });
    })
})

app.listen(3307, () => {
    console.log("listening on port 3307");
})