const { Router } = require('express');
const { check } = require('express-validator');

const { fieldValidation } = require('../middlewares/field-validation');

const {
    getCaliWeather

} = require('../controllers/weather');

const router = Router();

router.get('/weather', getCaliWeather);



module.exports = router;