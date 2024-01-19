// src/components/QuoteCard.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

interface QuoteCardProps {
  text: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author }) => (
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>{text}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <p>Author: {author}</p>
    </IonCardContent>
  </IonCard>
);

export default QuoteCard;
