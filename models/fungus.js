const mongoose = require('mongoose');

const fungusSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    created: Date,
    name: String,
    spawn: String,
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Fungus', fungusSchema);