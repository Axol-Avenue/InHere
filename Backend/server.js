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

// db.connect(err => {
//     if(err){
//         return err;
//     }
// })

// console.log(db)

// app.options('*', cors())
app.post('/signUp', (req, res) => {

    // Testing if the connection to the database is working
    // if(db.state === 'disconnected'){
    //     console.log("Db connection is unavailable (disconnected)");
    // }

    const sql = "INSERT INTO User (`Email`, `Username`, `Password`) VALUES (?,?,?)";

    const values = [
        req.body.email,
        req.body.username,
        req.body.password
    ];

    // Test query
    db.query("INSERT INTO User (`Email`, `Username`, `Password`) VALUES ('test', 'test2', 'test3')")

    db.query(sql, [values], (err, data) => {
        if(err)
        {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(3307, () => {
    console.log("listening");
})