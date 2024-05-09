const Book = require('../models/book');
const mongoose = require('mongoose');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({}).sort({title: 1});
        res.json(books);
    } catch (error) {
        console.log(error);
    }
}
const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(404).json({message: 'Book not found'});
    }
}
const createBook = async (req, res) => {
    const {title, author, available} = req.body;
    try {
        const newBook = await Book.create({title, author, available});
        res.status(201).json(newBook)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book);
    }
    catch (error) {
        console.log(error);
    }
}
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.json(book);
    }
    catch(error) {
        res.raise(error);
    }
}
module.exports = { getBooks, getBook, createBook, deleteBook, updateBook };