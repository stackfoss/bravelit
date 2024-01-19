// src/components/LatestQuotes.tsx
import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import './latestquotes.css';

interface Quote {
  text: string;
  author: string;
}

const LatestQuotes: React.FC<{ numberOfQuotes: number }> = ({ numberOfQuotes }) => {
  const [latestQuotes, setLatestQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    // Fetch quotes from quotes.json
    fetch('/src/quotes/quotes.json')
      .then((response) => response.json())
      .then((data) => setLatestQuotes(data.slice(0, numberOfQuotes)))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, [numberOfQuotes]);

  return (
    <IonList className='ion-list latest-quotes-list'>
      {latestQuotes.map((quote, index) => (
        <IonItem className="quote-container" key={index}>
          <IonLabel>
            <h2 className="quote-text">{quote.text}</h2>
            <p className="quote-author">{quote.author}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default LatestQuotes;
