// src/pages/Home.tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import LatestQuotes from '../components/LatestQuotes';
import LatestCategory from '../components/LatestCategory';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Facts from '../components/Facts';
import ReadBooks from '../components/ReadBooks';
import './home.css';

const categories = [
  "Psychology", "Philosophy", "Sociology", "Economics", "Technology", "History", "Health", "Leadership",
  "SelfHelp", "Career", "Marketing", "Politics", "Spirituality", "Biography", "Business", "Science", "Entrepreneurship"
];

const Home: React.FC = () => {
  const renderCategoryCards = () => {
    return categories.map((category, index) => (
      <div key={index} className="category-card">
        <IonCardHeader>
          <IonCardTitle>{`${category}`}</IonCardTitle>
          <IonCardContent>{`🚀 Explore the Latest in ${category.toLowerCase()}!`}</IonCardContent>
        </IonCardHeader>
        <IonCardContent>
          <LatestCategory category={category} numberOfItems={3} />
        </IonCardContent>
      </div>
    ));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Explore & Discover</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <Hero
          title="Big Ideas Summarized For You"
          subtitle="Discover, Learn, and Dive into Knowledge"
          description="Explore insightful book summaries and memorable quotes from a variety of genres. Expand your mind and enhance your knowledge."
        />
        <Features />
        <Facts />
        <ReadBooks />

        {/* Latest Quotes */}
        <IonCardHeader>
          <IonCardTitle>📜 Latest Quotes</IonCardTitle>
          <IonCardContent>Inspiration in a few words</IonCardContent>
        </IonCardHeader>
        <IonCardContent>
          <LatestQuotes numberOfQuotes={3} />
        </IonCardContent>

        {renderCategoryCards()}
      </IonContent>
    </IonPage>
  );
};

export default Home;
