import React from 'react';

const AdobeProducts = ({ adobeProducts }) => {
  return (
    <div className="adobe-products">
      <h2>Adobe Products Suite</h2>
      <ul>
        {adobeProducts.map(product => (
          <li key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {/* You can include more information here, such as features, usage, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdobeProducts;
