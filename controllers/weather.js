const { response, request } = require('express');
const axios = require('axios');

const getCaliWeather = async(req = request, res = response) => {
    try {
        const resp = await axios.get(process.env.API_WEATHER);
        return res.send(resp.data);
    } catch (error) {
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