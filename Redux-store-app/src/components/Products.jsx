import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add } from './CartSlice';
const Products = () => {
    const { data: products, state: status } = useSelector(state => state.product)
    console.log(products, status)
    const dispatch = useDispatch();
    return (
        <>
            <div className='product-container'>
                {products && status === 'fulfilled' && products.length && products.map(product =>
                    <div key={product.id} className='product-card'>
                        <div className='imgContainer'>
                            <img src={product.image} alt={'image'+product.title} className='product-img' />
                        </div>
                        <div className='product-details'>
                            <div title={product.title}>{product.title.length > 40 ? product.title.slice(0,40)+'...' : product.title}</div>
                            <div>INR {product.price}</div>
                            <button className='addBtn' onClick={() => { dispatch(add(product)) }}>Add to Cart</button>
                        </div>
                    </div>
                    )}
            </div>
        </>
    )
}

export default Products