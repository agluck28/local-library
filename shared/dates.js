var moment = require('moment');

//contains simple data formating tools
module.exports = {
    stringDate:  function(date) {
        return date ? moment(date).format('MMMM Do, YYYY').toString() : '';
    }
}