const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
    title: String,
    content: String,
    state: {
        type: Boolean,
        default: false
    },
    id_user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

var Level = mongoose.model('Level', LevelSchema);

module.exports = Level;