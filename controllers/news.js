const { response, request } = require('express');
const axios = require('axios');

const logger = require('../helpers/logger')

const getNews = async(req = request, res = response) => {
    logger.info('Realizando petición GET para noticias')
    try {
        const resp = await axios.get(process.env.API_NEWS);
        return res.send(resp.data.articles);

    } catch (error) {
        logger.error('Error al realizar petición GET para noticias')
        return res.status(400).send({
            errors: [{
                msg: error
            }]
        });
    }
};

const getNewsByTitle = async(req = request, res = response) => {
    logger.info('Realizando petición GET para noticias por titulo')
    const { title } = req.params;
    try {
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=${title}&from=2023-01-02&sortBy=publishedAt&apiKey=e212e3fc2e16410a9854a11abbad0fcb`);
        return res.send(resp.data.articles);
    } catch (error) {
        logger.error('Error al realizar petición GET para noticias por titulo')
        return res.status(400).send({
            errors: [{
                msg: error
            }]
        });
    }
};

module.exports = {
    getNews,
    getNewsByTitle
};