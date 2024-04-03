const fs = require("fs");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const https = require("https");
const bcrypt = require("bcrypt");
var privateKey = fs.readFileSync('./ssl/private.key', 'utf8');
var certificate = fs.readFileSync('./ssl/certificate.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var app = express();

app.use(express.json());
app.use( cors() );

var httpsServer = https.createServer(credentials, app);
const saltRounds = 10;
const db = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "axios",
    password: "AxiosAccess4276",
    database: "inhere"
});

app.options('*', cors())

// Sign-in Post
app.post('/', (req, res) => {

    const sql = "SELECT `Password` FROM User WHERE `Username` = ?";

    db.query(sql, req.body.username, (err, result) => {
        if(err)
        {
            console.error("Error receiving data from database", err);
            return res.status(500).json({ error: "Error receiving data from database" });
        }
        if(result.length > 0) {
            if (bcrypt.compareSync(req.body.password, Object.values(Object.values(result).at(0)).at(0))) {
                return res.status(200).json({ message: "Authentication Successful" });
            }
            return res.json({ error: "Password Incorrect" });
        } else {
            return res.json({ message: "Authentication Failed" });
        }
    })
})

// Signup Post
app.post('/signUp', (req, res) => {

    const sql = "SELECT `Username` FROM User WHERE `Username` = ?";
    const sql2 = "INSERT INTO User (`Email`, `Username`, `Password`, `Salt`) VALUES (?,?,?,?)";

    const hashedPass = bcrypt.hashSync(req.body.password, saltRounds);

    const values = [
        req.body.email,
        req.body.username,
        hashedPass,
        req.body.salt
    ];

    // Query to check if username is unique
    db.query(sql, req.body.username, (err, result) => {
        if(err) {
            console.error("Error inserting data into the database:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        if(result.length > 0) {
            console.error("Error, that username is already taken:", err);
            return res.status(500).json({ error: "Error, that username is already taken" });
        }
    })

    // Query to insert new user info into the database
    db.query(sql2, values, (err, result) => {
        if(err) {
            console.error("Error inserting data into the database:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        console.log("Data inserted into the database:", result);
        return res.status(200).json({ message: "Data inserted successfully" });
    })
})

// Allows Express to run on HTTPS instead of HTTP
httpsServer.listen(3307, () => {
    console.log("listening on port 3307");
})
