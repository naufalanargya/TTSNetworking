const mongoose = require('mongoose');
const leaderboardSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
time: {
type: Number,
required: true
}
})
module.exports = mongoose.model('leaderboardListing',leaderboardSchema);