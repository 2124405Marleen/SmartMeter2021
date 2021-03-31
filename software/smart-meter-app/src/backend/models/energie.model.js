const sql = require("../db.js");


//constructor
const Energie = function (energie){
  this.timestamp = energie.timestamp;
  this.offPeakFlow = energie.offPeakFlow;
  this.peakFlow = energie.peakFlow;
  this.offPeakPowerFeed = energie.offPeakPowerFeed;
  this.peakPowerFeed = energie.peakPowerFeed;
  this.currentRate = energie.currentRate;
  this.currentPower = energie.currentPower;
  this.returnedPower = energie.returnedPower;
  this.gasUsage = energie.gasUsage;
}

Energie.getAll = async onComplete => {
  await sql.query("SELECT * from data_maarten_smartmeter", (err, res) => {
    if(err) {
      console.log("Error: ", err);
      onComplete(null, err);
      return;
    }
    // console.log("Energie: ", res);
    onComplete(null, res);
  });

}

module.exports = Energie;
