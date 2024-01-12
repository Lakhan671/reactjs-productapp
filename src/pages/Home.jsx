import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/products/ProductDetails.jsx';

function HomePage() {
  const products = useSelector((state) => state.products.products);
  const [filterText, setFilterText] = useState('');

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <section className="mt-1" id="product-d">
        <h2>Product List</h2>
        <div className="filter-container">
          <input
            type="text"
            className="form-control filter-input"
            placeholder="Enter a category"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <ul>
          {filteredProducts.map((product) => (
            <ProductDetails key={product.pid} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
