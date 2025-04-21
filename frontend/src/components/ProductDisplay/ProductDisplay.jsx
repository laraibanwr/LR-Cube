import { useContext } from 'react'
import './ProductDisplay.css'
import ProductItem from '../ProductItem/ProductItem'
import { StoreContext } from '../../context/StoreContext'

const ProductDisplay = ({category}) => {
    const {product_list} = useContext(StoreContext)
  return (
    <div className='product-display' id='product-display'>
      <h2>Prime residences nearby</h2>
      <div className='product-display-list'>
        {product_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default ProductDisplay
