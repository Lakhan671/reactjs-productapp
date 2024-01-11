import { useSelector } from 'react-redux';
import ProductDetails from '../components/products/ProductDetails.jsx';
function HomePage() {
  const products = useSelector((state) => state.products.products);
  
  return (
    <div>
        <section  className="mt-1" id="product-d">
          <h2>Product List</h2>
          <ul>
            {products.map((product) => (
              <ProductDetails key={product.pid} product={product} />
            ))}
          </ul>
        </section>
    </div>
  );
}

export default HomePage;
