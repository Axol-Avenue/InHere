const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use( cors() );
app.use(express.json());

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

    const sql = "INSERT INTO User (`Email`, `Username`, `Password`) VALUES (?,?,?)";

    const values = [
        req.body.email,
        req.body.username,
        req.body.password
    ];


    db.query(sql, values, (err, data) => {
        if(err)
        {
            return res.json("Error inserting data into the database");
        }
        return res.json(data);
    })
})

app.listen(3307, () => {
    console.log("listening on port 3307");
})