const fs = require("fs");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const https = require("https");
var app = express();

app.use(express.json());
app.use( cors() );

// --------------------
// Database Connection:
// --------------------
require('dotenv').config(); // database connection variables

const bcrypt = require("bcrypt");

var privateKey = fs.readFileSync('./ssl/private.key', 'utf8');
var certificate = fs.readFileSync('./ssl/certificate.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, app);
const saltRounds = 10;
const db = mysql.createPool({
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.options('*', cors())

// --------------------
// Database API Calls::
// --------------------

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

//TaskTracker Events Get:
app.post('/taskTracker', (req, res) => {

    const sql = "SELECT `Data` FROM Calendar WHERE `UserID` = ?";

    // Query to get events
    db.query(sql, req.body.userID, (err, result) => {
        if(err) {
            console.error("Error receiving data from the database:", err);
            return res.status(500).json({ error: "Error receiving data from the database" });
        }
        if(result.length > 0) {
            return res.status(200).json({
                message: "Query Successful",
                events: result
            });
        }
    })
})

// Event Statistics:
app.post('/eventStats', (req, res) => {
    // Assumptions: Status == 0 is incompleted, Status == 1 is completed

    const sqlQuery1 = "(SELECT COUNT(*) as `Total Count` FROM Task WHERE `UserID` = ?) as `Total_Count`";
    const sqlQuery2 = "(SELECT COUNT(*) as `Completed Count` FROM Task WHERE `UserID` = ? AND `Status` = 1) as `Completed_Count`";

    const sqlQuery = "SELECT " + sqlQuery1 + ", " + sqlQuery2;

    // Query to get events
    db.query(sqlQuery, [req.body.userID, req.body.userID], (err, result) => {
        if(err)
        {
            console.error("Error receiving data from the database:", err);
            return res.status(500).json(
                {
                    error: "Error receiving data from the database",
                    err: err
                }
            );
        }
        else if(result.length > 0)
        {
            return res.status(200).json({
                message: "Query Successful",
                results: result
            });
        }
    });
});


// Allows Express to run on HTTPS instead of HTTP
httpsServer.listen(3307, () => {
    console.log("listening on port 3307");
})
