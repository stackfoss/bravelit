// src/components/LatestSummariesContainer.tsx
import React from 'react';
import LatestCategory from './LatestCategory';

const LatestSummariesContainer: React.FC = () => {
  return (
    <>
      {/* Other components... */}
      <LatestCategory category="Biography" numberOfItems={3} />
      <LatestCategory category="Psychology" numberOfItems={3} />
      <LatestCategory category="Philosophy" numberOfItems={3} />
      {/* Add more categories as needed */}
    </>
  );
};

export default LatestSummariesContainer;
