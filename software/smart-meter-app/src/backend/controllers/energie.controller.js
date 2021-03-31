const energie = require("../models/energie.model");

exports.findAll = async OnComplete => {
  return await energie.getAll((err, data) => {
    if (err) {
      return OnComplete(err, null);
    }else {
      console.log('Got data');
      return OnComplete(null, data);
    }
  });
}
