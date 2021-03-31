const mysql = require("mysql");


const dbConnection = mysql.createConnection({
    host: "underthing.unobtainium.nl",
    port: "3307",
    user: "SmartSensor",
    password: "1Welkom#12",
    database: "Marleen_smartmeterdata"
  });

  


// open the MySQL connection
dbConnection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


module.exports = dbConnection;
