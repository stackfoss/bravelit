// LatestCategory.tsx
import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';
import './LatestCategory.css';

interface LatestCategoryProps {
  category: string;
  numberOfItems: number;
}

interface CategoryItem {
  id: string;
  title: string;
  author: string;
  summary: string;
}

const LatestCategory: React.FC<LatestCategoryProps> = ({ category, numberOfItems }) => {
  const [latestItems, setLatestItems] = useState<CategoryItem[]>([]);

  useEffect(() => {
    // Fetch all category items from the corresponding JSON file
    fetch(`/src/summaries/${category.toLowerCase()}/${category.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Take only the specified number of items
        setLatestItems(data.slice(0, numberOfItems));
      })
      .catch((error) => console.error(`Error fetching ${category} summaries:`, error));
  }, [category, numberOfItems]);

  return (
    <IonList className="ion-list-wrap">
      {latestItems.map((item, index) => (
        <IonItem className="latest-category-container" key={index} lines="none">
          <IonLabel>
            {/* Apply the custom class to the Link component */}
            <Link to={`/category/${category.toLowerCase()}/${encodeURIComponent(item.title)}`} className="latest-category-link">
              {/* Use the Link component to navigate to the details page with encoded title */}
              <h2 className="latest-category-title">{item.title}</h2>
            </Link>
            <p className="latest-category-author">{item.author}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default LatestCategory;
