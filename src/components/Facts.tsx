// Facts.tsx

import React from 'react';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './facts.css'; // Import your custom styles

const Facts: React.FC = () => {
  return (
    <>
      <IonCardTitle className="facts-title">Discover Bookish Realities Around the Globe</IonCardTitle>
      <IonList className='ion-list'>
        {/* USA */}
        <IonItem>
          <IonLabel>
            <h2 className="country-heading">United States</h2>
            <p className="fact-description">
              In the USA, the average person reads around 12 books per year, and the literacy rate is 99%.
            </p>
          </IonLabel>
        </IonItem>

        {/* UK */}
        <IonItem>
          <IonLabel>
            <h2 className="country-heading">United Kingdom</h2>
            <p className="fact-description">
              In the UK, the average person reads about 8 books per year, and the literacy rate is 99.5%.
            </p>
          </IonLabel>
        </IonItem>

        {/* Canada */}
        <IonItem>
          <IonLabel>
            <h2 className="country-heading">Canada</h2>
            <p className="fact-description">
              Canada has a literacy rate of 99%, and the average Canadian reads approximately 10 books annually.
            </p>
          </IonLabel>
        </IonItem>

        {/* Germany */}
        <IonItem>
          <IonLabel>
            <h2 className="country-heading">Germany</h2>
            <p className="fact-description">
              In Germany, the average person reads around 12 books per year, and the literacy rate is 98%.
            </p>
          </IonLabel>
        </IonItem>
      </IonList>
    </>
  );
};

export default Facts;
