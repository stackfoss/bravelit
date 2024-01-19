// HeroComponent.tsx
import React from 'react';
import {
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import './hero.css'; // Import your custom styles

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroComponent: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  return (
    <div className="hero-container">
      <IonCardSubtitle className="hero-subtitle">{subtitle}</IonCardSubtitle>
      <IonCardTitle className="hero-title">{title}</IonCardTitle>
      <IonCardContent>
        <div className="hero-description">{description}</div>
      </IonCardContent>
    </div>
  );
};

export default HeroComponent;
