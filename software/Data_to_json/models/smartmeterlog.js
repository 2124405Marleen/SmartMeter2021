const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SmartMeterLogSchema = new Schema({
    topic: {
        type: String,
        minlength: [10, 'Topic contains at least 10 characters'],
        maxlength: [30, 'topic contains at maximum 20 characters'],
        required: true
    }, 
    smartmeter: {
        type: String,
        required: true
    }
});

const SmartMeterState = mongoose.model('smartmeter', SmartMeterLogSchema);
module.exports = SmartMeterState;