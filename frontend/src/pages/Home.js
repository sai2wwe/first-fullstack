import {useState, useEffect} from 'react';
export default function Home() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/api/books')
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((err) => console.log(err));
    }, []);
    const handleClick = (id,e) => {
        fetch(`http://localhost:4000/api/books/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setBooks(books.filter((book) => book._id !== id));
                    window.refresh();
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <h1 className='m-3 text-center'>Home</h1>
            <table className='bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.available.toString()}</td>
                            <td><button onClick={(e) => {
                                handleClick(book._id,e);
                            
                            }}>❌</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}