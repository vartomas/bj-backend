const express = require('express')
const router = express.Router()
const verify = require('./verifyToken')

const History = require('../models/HistoryModel')

router.get('/', verify, async (req, res) => {
  try {
    const info = await History.find()
    res.json(info)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:user', verify, async (req, res) => {
  try {
    const info = await History.findOne({ user: req.params.user })
    res.json(info)
  } catch (err) {
    res.json({ message: err })
  }
})

router.patch('/:user', verify, async (req, res) => {
  try {
    const infoToUpdate = await History.updateOne(
      { user: req.params.user },
      { $set: { history: req.body.history } }
    )
    res.json(infoToUpdate)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/', verify, async (req, res) => {
  const info = new History({
    user: req.body.user,
    history: req.body.history,
  })

  try {
    const savedInfo = await info.save().then(data => res.json(data))
    res.json(savedInfo)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
