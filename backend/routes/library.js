const express = require('express');
const router = express.Router();
const { getBooks, getBook, createBook, deleteBook, updateBook } = require('../controllers/contoller')
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.get('/', (req, res) => {
    getBooks(req, res);

})

router.get('/:id', (req, res) => {
    getBook(req, res);
})


router.post('/', async (req, res) => {
    createBook(req, res);
})

router.delete('/:id', (req, res) => {
    deleteBook(req, res);
})

router.patch('/:id', (req, res) => {
    updateBook(req, res);
})

module.exports = router;