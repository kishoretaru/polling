const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote= require('../models/Vote')
const Pusher = require('pusher');
var pusher = new Pusher({
  appId: '948521',
  key: '12d9dd051c49d46a101e',
  secret: '35ca528c74664962289d',
  cluster: 'ap2',
  encrypted: true
});
router.get('/',(req, res) => {
  Vote.find().then(votes => res.json({success: true,
  votes: votes }));
});

router.post('/', (req, res) => {

  const newVote = {
    os: req.body.os,
    points: 1
  }
new Vote(newVote).save().then(vote => {
  pusher.trigger('os-poll', 'os-vote', {
    points:parseInt(vote.points),
    os: vote.os

});
return res.json({ success: true, message:"Thank You For Voting"});
});

});
module.exports = router;
