// ReadBooks.tsx

import React from 'react';
import {
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './readbooks.css'; // Import your custom styles

const booksData = [
  { title: 'Quotations from Chairman Mao Tse-tung', author: 'Mao Zedong' },
  { title: 'Don Quixote', author: 'Miguel de Cervantes' },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { title: 'The Alchemist', author: 'Paulo Coelho' },
  { title: 'Harry Potter series', author: 'J.K. Rowling' },
  // Add more books as needed
];

const ReadBooks: React.FC = () => {
  return (
    <>
      <IonCardTitle className="read-books-title">Most Read Books Ever</IonCardTitle>
      <IonCardSubtitle className="read-books-subtitle">Discover Popular Titles Loved by Readers</IonCardSubtitle>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonList className='ion-list'>
              {booksData.map((book, index) => (
                <IonItem key={index} className="book-item">
                  <IonLabel>
                    <h2 className="book-title">{book.title}</h2>
                    <p className="book-author">{book.author}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default ReadBooks;
