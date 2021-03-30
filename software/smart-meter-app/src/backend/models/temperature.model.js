const sql = require("../db.js");


//constructor
const Temperature = function (temperature){
  this.temperature = temperature.Temperature;
  this.time = temperature.Time;
}

Temperature.getAll = async onComplete => {
  await sql.query("SELECT * FROM `data_maarten_zigbee` ORDER BY `data_maarten_zigbee`.`Time` DESC", (err, res) => {
    if(err) {
      console.log("Error: ", err);
      onComplete(null, err);
      return;
    }
    onComplete(null, res);
  });

}

module.exports = Temperature;
