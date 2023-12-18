import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import '../styles/BookData.css'

function BookData({ bookId }) {
  const [bookData, setBookData] = useState(null);
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchBookFromFirestore = async () => {
      try {
        const bookRef = doc(db, 'book', bookId);
        const bookDoc = await getDoc(bookRef);

        if (bookDoc.exists()) {
          const book = bookDoc.data();
          setBookData(book);

          const authorRef = book.owner;
          const authorDoc = await getDoc(authorRef);

          if (authorDoc.exists()) {
            setAuthorData(authorDoc.data());
          } else {
            console.log('Author document does not exist');
          }
        } else {
          console.log('Book document does not exist');
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchBookFromFirestore();
  }, [bookId]);

  if (!bookData || !authorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <p>Owner: {authorData.nickname}</p>
      <p className={bookData.isAvailable ? 'available-true' : 'available-false'}>Available: {bookData.isAvailable ? 'Yes' : 'No'}</p>
      <button>Lend</button>
    </div>
  );
}

export default BookData;
