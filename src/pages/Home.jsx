import React, { useState,useEffect  } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductDetails from '../components/products/ProductDetails.jsx';
import { initializeProducts } from '../store/productsStore.js';
import Posts from '../components/products/Posts.jsx';
function HomePage() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const posts = useSelector((state) => state.products.posts);
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);
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
        <hr/>
        <div className='filter-container primary' ><h1>Post List</h1></div>
        <ul>
          {posts.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
