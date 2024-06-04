const express = require('express');
const axios = require("axios")
const router = express.Router()
const { BICYCLE_SERVICE_PORT = 4040 } = process.env
const bicycleService  = `http://localhost:${BICYCLE_SERVICE_PORT}`

/* GET home page. */
router.get('/:id', async function(req, res, next) {
 const { id } = req.params
 const { data: bicycle } = await axios.get(`${bicycleService}/${id}`)
 res.setHeader("content-Type", "application/json")
 res.send({
  id: bicycle.id,
  color: bicycle.color
 })
});

module.exports = router;
