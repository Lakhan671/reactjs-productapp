import { useDispatch } from 'react-redux';
import { productsActions } from '../../store/productsStore';
import { useNavigate } from 'react-router-dom';
export default function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editProduct = () => {
    dispatch(productsActions.isEditStatus(true));
    dispatch(productsActions.setEditProduct(product));
    navigate('/products');
  };
  const deleteProduct = () => {
    dispatch(productsActions.deleteProduct(product.pid));
  };
  return (
    <li className={product.isSpecial ? 'special-prodct' : ''}>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> &pound;{product.price}</p>
      <p><strong>Expiration Date:</strong> {product.expDate}</p>
      <button type="button" onClick={editProduct} className="btn  btn-warning mb-1">Edit</button>
      <button type="button" onClick={deleteProduct} className="btn mx-4 btn-danger mb-1">Delete</button>
    </li>
  );
}
