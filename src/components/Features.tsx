// Features.tsx

import React from 'react';
import {
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import './features.css'; // Import your custom styles
import { prismOutline, globeOutline, heartOutline } from 'ionicons/icons'; // Updated Ionicons

const Features: React.FC = () => {
  return (
    <>
      <IonCardTitle className="features-title">One Minute Book Summaries</IonCardTitle>
      <IonGrid>
        <IonRow>
          <IonCol size="12" md="4" className="feature-col">
            <div className="feature-icon">
              <IonIcon icon={prismOutline} />
            </div>
            <h3 className="feature-heading">100% Free</h3>
            <p className="feature-description">
              Enjoy the benefits without any cost to your pocket.
            </p>
          </IonCol>
          <IonCol size="12" md="4" className="feature-col">
            <div className="feature-icon">
              <IonIcon icon={globeOutline} />
            </div>
            <h3 className="feature-heading">Unlimited Access</h3>
            <p className="feature-description">
              Read at your convenience, no restrictions on when or where.
            </p>
          </IonCol>
          <IonCol size="12" md="4" className="feature-col">
            <div className="feature-icon">
              <IonIcon icon={heartOutline} />
            </div>
            <h3 className="feature-heading">Diverse Content</h3>
            <p className="feature-description">
              Explore over 10,000 book summaries, 5,000 quotes, and 16 different categories.
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default Features;
