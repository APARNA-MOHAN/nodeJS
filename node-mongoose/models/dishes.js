const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true//automaticaly add created at timestamp and updated timestamp into the doc
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;


// schema
// model

