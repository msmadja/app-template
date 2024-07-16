const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({ 
    key: { 
        type: String, 
        require: true
    }, 
    value: {
        type: mongoose.Schema.Types.Mixed,
        require: true

    }
}); 
  
const Setting = new mongoose.model("Setting", settingSchema);

module.exports =  Setting;