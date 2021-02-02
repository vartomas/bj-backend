const mongoose = require('mongoose')

const HistoryModel = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  history: [
    {
      creditChange: [Number],
      playerCards: [String],
      dealerCards: [String],
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
})

module.exports = mongoose.model('history', HistoryModel)
