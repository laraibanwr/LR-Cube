import { useContext } from 'react'
import './ProductItem.css'
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const ProductItem = ({id,name,price,description,image}) => {
  const { product_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    window.open(`/product/${id}`);
  };
  return (
    <div className='product-item'>
      <div className="product-item-img-container">
        <img className="product-item-image" src={image} alt="" />
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="product-item-desc">{description}</p>
        <div className="product-item-price-btn">
          <p>${price}</p>
          <button onClick={() => handleViewClick(id)}>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
