// src/components/CategoryDetails.tsx
import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  title: string;
  category: string;
}

interface CategoryDetailsProps extends RouteComponentProps<MatchParams> {}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ match }) => {
  const [categoryItem, setCategoryItem] = useState<any>(null);

  useEffect(() => {
    // Fetch category item details based on the provided title and category from the URL params
    const fetchCategoryItemDetails = async () => {
      try {
        const response = await fetch(`/src/summaries/${match.params.category.toLowerCase()}/${match.params.category.toLowerCase()}.json`);
        const data = await response.json();

        const selectedCategoryItem = data.find(
          (item: any) => item.title.toLowerCase() === decodeURIComponent(match.params.title.toLowerCase())
        );
        setCategoryItem(selectedCategoryItem);
      } catch (error) {
        console.error('Error fetching category item details:', error);
      }
    };

    fetchCategoryItemDetails();
  }, [match.params.title, match.params.category]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/category/${match.params.category}`} />
          </IonButtons>
          <IonTitle>{match.params.category} Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {categoryItem && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{categoryItem.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{categoryItem.summary}</p>
              <p>{categoryItem.author}</p>
              {/* Add other details as needed */}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CategoryDetails;
