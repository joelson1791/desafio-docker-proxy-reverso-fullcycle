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
    connection.end()

app.get('/', (req, res) => {
    const connection2 = mysql.createConnection(config);

    const sql = `INSERT INTO people(name) VALUES('CHICO ANTONIO')`
        connection2.query(sql);

    const sqlSelect = `SELECT id, name FROM people`;  
  
        connection2.query(sqlSelect, (error, results, fields) => {
            if (error) {
                throw error
            };
            
            let table = '<table>';
            table += '<tr><th>ID</th><th>Name</th></tr>';
                for(let people of results) {      
                    table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
                }

            table += '</table>';    
            res.send('<h1>Full Cycle Rocks!</h1>' + table);
        });

    connection2.end()
})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})