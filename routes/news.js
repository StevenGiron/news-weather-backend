const { Router } = require('express');

const {
    getNews,
    getNewsByTitle

} = require('../controllers/news');

const router = Router();

router.get('/news', getNews);
router.get('/news/:title', getNewsByTitle);


module.exports = router;