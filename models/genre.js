var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, minlength: 3, maxLength: 100, required: true} //describes the genre
    }
);

//Defines a virtual for the genre's url
GenreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);