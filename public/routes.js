const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'database-1.cphpuym2gigp.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'LIQUIDC'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});


const coins = async function(req, res) {
    connection.query('SELECT * FROM Coins', (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from MySQL:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}

module.exports = {coins};
