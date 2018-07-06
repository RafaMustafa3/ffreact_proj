import express from 'express'
import welcome from '../controllers/index'
import axios from 'axios'
import path from 'path'

const router = express.Router()

router.get("/api/breaking", (req, res, next) => {
  let breaking = 'https://content.guardianapis.com/search?q=breaking&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d';
  axios.get(breaking)
    .catch( err => console.log(err) )
    .then( response => res.send(response.data) )
});

router.get("/api/ticker", (req, res, next) => {
  const url = "https://content.guardianapis.com/search?&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d"
  axios.get(url)
    .catch( err => console.log(err) )
    .then( response => res.send(response.data) )
});

router.get("/api/upper/:tagId", (req, res) => {
  let cat = `https://content.guardianapis.com/search?q=${req.params.tagId}&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d`;
  axios.get(cat)
    .catch( err => console.log(err) )
    .then( response => res.send(response.data) )
});

router.get("/api/lower/card/:cat", (req, res) => {
  let ucat = `https://newsapi.org/v2/everything?q=${req.params.cat},relevancy&language=en&apiKey=09ef819989214e788bd5c136781c8b90`;
  axios.get(ucat)
    .catch( err => console.log(err) )
    .then( response => res.send(response.data) )
});

// Always return the main index.html, so react-router render the route in the client
router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  res.end()
});


module.exports = router
