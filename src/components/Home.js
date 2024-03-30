import React from 'react';

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
      <div className="adobe-products">
        {adobeProductsData.map((product, index) => (
          <div key={index} className="adobe-product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      {/* Other content */}
    </div>
  );
};

export default Home;
