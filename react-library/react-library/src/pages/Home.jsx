import '../styles/Home.css';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import BookData from './BookData';

async function fetchBookFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'book'));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

function Home() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchBookFromFirestore();
      setBookData(data);
    }
    fetchData();
  }, []);

  const [showDetails, setShowDetails] = useState({});

  const handleReadMore = (bookId) => {
    setShowDetails(prevState => ({
      ...prevState,
      [bookId]: !prevState[bookId]
    }));
  };

  return (
    <div className='library-container'>
      {bookData.map((book) => (
        <div key={book.id} className="book-card">
          <div
            className="book-image"
            style={{ backgroundImage: `url(${book.url})` }}
          ></div>
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">Author: {book.author}</p>
          <p className="book-description">{book.description}</p>


          <button onClick={() => handleReadMore(book.id)} className="read-more-btn">
            {showDetails[book.id] ? 'Show less' : 'Read more'}
          </button>
          {showDetails[book.id] && <BookData bookId={book.id} />}
        </div>
      ))}
    </div>
  );
}

export default Home;
