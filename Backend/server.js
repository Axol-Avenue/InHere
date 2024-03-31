const fs = require("fs");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const https = require("https");
var privateKey = fs.readFileSync('./ssl/private.key', 'utf8');
var certificate = fs.readFileSync('./ssl/certificate.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var app = express();

app.use(express.json());

app.use( cors() );

var httpsServer = https.createServer(credentials, app);

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "axios",
    password: "AxiosAccess4276",
    database: "inhere"
});

app.options('*', cors())

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

httpsServer.listen(3307, () => {
    console.log("listening on port 3307");
})
