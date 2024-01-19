// src/pages/Quotes.tsx
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './quotes.css'; // Import the styles

interface Quote {
  text: string;
  author: string;
}

const Quotes: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    // Fetch quotes from quotes.json
    fetch('/src/quotes/quotes.json')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  const handleSearch = (event: CustomEvent) => {
    setSearchText(event.detail.value);
  };

  const filteredQuotes = quotes.filter(
    (quote) => quote.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Discover Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSearchbar
          placeholder="Search by author"
          onIonChange={handleSearch}
        ></IonSearchbar>

        <IonList className='ion-list'>
          {filteredQuotes.map((quote, index) => (
            <IonItem key={index} lines="full" className="quote-container">
              <IonLabel>
                <h2 className="quote-text">{quote.text}</h2>
                <p className="quote-author">- {quote.author}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Quotes;
