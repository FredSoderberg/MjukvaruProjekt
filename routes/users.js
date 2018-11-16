const express = require('express');
const queries = require('../queries/userQueries');

const router = express.Router();

router.get('/getusers/', (req, res) => {
  queries.getUsers(res, (result) => {
    if (result.error) res.send(result.message);
    res.send(result.message);
  });
});

router.post('/getuserinfoemail/', (req, res) => {
  queries.getUserInfoEmail(req, res, (result) => {
    if (result.error) res.send(result.message);
    res.send(result.message);
  });
});

router.post('/gethighscores/', (req, res) => {
  queries.getHighscore(req, res, (result) => {
    if (result.error) res.send(result.message);
    res.send(result.message);
  });
});

router.post('/removeuser/', (req, res) => {
  queries.removeUser(req, res, (result) => {
    if (result.error) res.send(result.message);
    res.send(result.message);
  });
});

router.post('/updateuser/', (req, res) => {
  queries.updateUser(req, res, (result) => {
    if (result.error) res.send(result.message);
    res.send(result.message);
  });
});

module.exports = router;
