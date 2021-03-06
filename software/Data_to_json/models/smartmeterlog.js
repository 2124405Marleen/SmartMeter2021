
const sql = require('../controller/mysqldb');

var Module = module.exports;

// models 

const energy = function (energy){
    this.timestamp = energy.timestamp;
    this.offPeakFlow = energy.offPeakFlow;
    this.peakFlow = energy.peakFlow;
    this.offPeakPowerFeed = energy.offPeakPowerFeed;
    this.peakPowerFeed = energy.peakPowerFeed;
    this.currentRate = energy.currentRate;
    this.currentPower = energy.currentPower;
    this.returnedPower = energy.returnedPower;
    this.gasUsage = energy.gasUsage;
}

energy.getAll = async onComplete => {
  await sql.query("SELECT * from data_maarten_smartmeter", (err, res) => {
    if(err) {
      console.log("Error: ", err);
      onComplete(null, err);
      return;
    }
    console.log("Energie: ", res);
    onComplete(null, res);
  });
}  

energy.setData = async (Temperature, Time, OnComplete) => {
  sql.query("INSERT INTO `data_maarten_zigbee` (`Temperature`, `Time`) VALUES ('?', '?');" [Temperature, Time], (err, res) => {
    if(err) {
      console.log(err);
      onComplete(null, err);
      return;
    }
    console.log("Data Added");
    onComplete(null, res);
  });
}

Module.energy = energy;