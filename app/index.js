const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config);

const sqlCreate = `CREATE TABLE if not exists people(id int(11) not null auto_increment, name char(255), PRIMARY KEY (id) )`
connection.query(sqlCreate);

const sql = `INSERT INTO people(name) VALUES('CHICO ANTONIO')`
connection.query(sql);
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})