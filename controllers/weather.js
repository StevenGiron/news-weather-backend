const { response, request } = require('express');
const axios = require('axios');

const logger = require('../helpers/logger')

const getCaliWeather = async(req = request, res = response) => {
    logger.info('Realizando peticion GET para clima')
    try {
        const resp = await axios.get(process.env.API_WEATHER);
        return res.send(resp.data);
    } catch (error) {
        logger.error('Error al realizar peticion GET para clima')
        return res.status(400).send({
            errors: [{
                msg: error
            }]
        });
    }

};

module.exports = {
    getCaliWeather
};