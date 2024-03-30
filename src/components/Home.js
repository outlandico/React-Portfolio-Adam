import React from 'react';
import AdobeProducts from './AdobeProducts'; // Update the path if needed

const Home = () => {
  // Sample data about Adobe products suite
  const adobeProductsData = [
    {
      name: 'Adobe Photoshop',
      description: 'A powerful image editing software used by professionals worldwide.',
    },
    {
      name: 'Adobe Illustrator',
      description: 'A vector graphics editor used to create illustrations, logos, icons, etc.',
    },
    // Add more Adobe products as needed
  ];

  return (
    <div>
      {/* Other content */}
      <AdobeProducts adobeProducts={adobeProductsData} />
      {/* Other content */}
    </div>
  );
};

export default Home;
