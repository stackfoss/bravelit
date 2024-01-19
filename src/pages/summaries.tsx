// src/pages/Summaries.tsx

import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';
import './summaries.css';
import Book from '../models/Book';
import categories from '../summaries/categories';

const Summaries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: Book[] = [];

        if (selectedCategory !== undefined) {
          const categoryKey = selectedCategory.toLowerCase().replace(/\s+/g, '');
          const { default: categoryData } = await import(`../../src/summaries/${categoryKey}/${categoryKey}.json`);
          data = categoryData.map((book: Book, index: number) => ({ ...book, id: `${categoryKey}_${index}` }));
        } else {
          const categoryImports = await Promise.all(
            categories.map(async (category) => {
              const categoryKey = category.toLowerCase().replace(/\s+/g, '');
              const { default: categoryData } = await import(`../../src/summaries/${categoryKey}/${categoryKey}.json`);
              return categoryData.map((book: Book, index: number) => ({ ...book, id: `${categoryKey}_${index}` }));
            })
          );

          data = categoryImports.flatMap((categoryData: Book[]) => categoryData);
        }

        setBooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const filteredBooks = books.filter((book) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearchTerm) ||
      book.author.toLowerCase().includes(lowerSearchTerm) ||
      book.category.toLowerCase().includes(lowerSearchTerm)
    );
  });

  const openDetailsModal = (book: Book) => {
    setSelectedBook(book);
  };

  const closeDetailsModal = () => {
    setSelectedBook(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Book Summaries</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchTerm}
          onIonChange={(e) => setSearchTerm(e.detail.value!)}
          placeholder="Search by title, author, or category"
        />

        <IonSelect
          value={selectedCategory}
          placeholder="Filter by category"
          onIonChange={(e) => setSelectedCategory(e.detail.value !== '' ? e.detail.value : undefined)}
        >
          <IonSelectOption value="">All Categories</IonSelectOption>
          {categories.map((category) => (
            <IonSelectOption key={category} value={category}>
              {category}
            </IonSelectOption>
          ))}
        </IonSelect>

        <IonList className="ion-list-wrap">
          {filteredBooks.map((book) => (
            <IonItem key={book.id} button detail onClick={() => openDetailsModal(book)}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{book.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonLabel className="ion-text-wrap">
                    <p>{book.category}</p>
                    <p>{book.summary.length > 100 ? `${book.summary.slice(0, 100)}...` : book.summary}</p>
                    <p>{book.author}</p>
                  </IonLabel>
                </IonCardContent>
              </IonCard>
            </IonItem>
          ))}
        </IonList>

        {/* Details Modal */}
        <IonModal isOpen={!!selectedBook} onDidDismiss={closeDetailsModal}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{selectedBook?.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonLabel className="ion-text-wrap">
                <p>{selectedBook?.category}</p>
                <p>{selectedBook?.summary}</p>
                <p>{selectedBook?.author}</p>
              </IonLabel>
            </IonCardContent>
            <IonButton expand="full" onClick={closeDetailsModal}>
              Close
            </IonButton>
          </IonCard>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Summaries;
