const { Router } = require('express');
const { check } = require('express-validator')

const { fieldValidation } = require('../middlewares/field-validation')
const { userNotExist, userExists } = require('../helpers/db-validators')

const {
    signup,
    login,

} = require('../controllers/user');

const router = Router();

router.post('/signup', [
    check('username', 'Username is required').not().isEmpty(),
    check('username').custom(userExists),
    check('password', 'password must contain at least 4 characters').isLength({ min: 4 }),
    fieldValidation
], signup);

router.post('/login', [
    check('username').custom(userNotExist),
    fieldValidation
], login);


module.exports = router;