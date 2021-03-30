const temp = require('../models/temperature.model')

exports.findAll = async OnComplete => {
  return await temp.getAll((err, data) => {
    if (err) {
      return OnComplete(err, null);
    }else {
      console.log('Got data');
      return OnComplete(null, data);
    }
  });
}

