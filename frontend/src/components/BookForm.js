import { useState } from 'react';

export default function BookForm(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [available, setAvailable] = useState(false);
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title, author, available};
        fetch('http://localhost:4000/api/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        })
        .then(() => {
            setTitle('');
            setAuthor('');
            setAvailable(false);
            alert('Book added successfully');

        })
        .catch((error) => {
            setError(error);
            alert('Error adding book');
        });
    }

    return (
        <div className="container">
            <h1>BookForm</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className='text text-primary'>Title</label>
                    <input type="text" id="title" name="title" value={title} onInput={(e) => {
                        setTitle(e.target.value);
                    }} className='form-control w-25'/>
                </div>
                <div>
                    <label htmlFor="author" className='text text-primary'>Author</label>
                    <input type="text" id="author" name="author" value={author} onInput={(e) => {
                        setAuthor(e.target.value);
                    }} className='form-control w-25'/>
                </div>
                <div>
                    <label htmlFor="available" className='text text-primary'>Available</label><br/>
                    <input type="checkbox" id="available" name="available" value={available} onInput={(e) => {
                        setAvailable(e.target.checked);
                    }} className='check-box'/>
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                {error && <div className='text text-danger'>{error}</div>}
            </form>
        </div>
    )
}