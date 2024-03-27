const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use( cors() );
app.use(express.json);

const db = mysql.createConnection({
    host: "localhost", // TODO: find host for database on web server!
    user: "axios",
    password: "AxiosAccess4276",
    database: "inhere"
});

app.post('http://localhost:3306/signUp', (req, res) => {
    const sql = "INSERT INTO User (`Email`, `Username`, `Password`) VALUES (?)";

    const values = [
        req.body.email,
        req.body.username,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if(err)
        {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(3306, () => {
    console.log("listening");
})