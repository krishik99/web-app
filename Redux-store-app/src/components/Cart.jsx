import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { add, remove, removeAll,decreaseQuantity } from './CartSlice';
import Toastr from '../utilities/Toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../utilities/AuthContext';
import { Navigate } from 'react-router-dom';
const Cart = () => {
    const {data:products} = useSelector(state => state.cart)
    console.log(products)
    const dispatch = useDispatch();
    const [showToastr,setTtoastr] = useState(false);
    const handleRemoveAll = () => {
      setTtoastr(true);
      console.log('removeALl')
    }
    const confirmRemove = (confirm)=> {
      if(confirm === true){
        dispatch(removeAll())
      }
      setTtoastr(false);
    }
    const {loggedIn} = useAuth();
    const cartView = () => {
      return <>
     {products && products.length > 0 && <button style={{padding:"1em 2em 1em 1em"}} className='removeBtn' onClick={handleRemoveAll}>Remove All</button> }
      <div className='product-container'>
             {products && products.length > 0 && products.map((product,id) => 
                      <div key={id} className='product-card'>
                      <div className='imgContainer'>
                          <img src={product.image} alt={'image'+product.title} className='product-img' />
                      </div>
                      <div className='product-details'>
                          <div>{product.title.length > 40 ? product.title.slice(0,40) : product.title}</div>
                          <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'1em'}}>
                            <span title='Add' style={{border:'2px solid',padding:'0.2em',borderRadius:'4px',display:'flex',gap:'1em'}}>
                              <FontAwesomeIcon className='fafaActions' icon={faPlus} onClick={()=>{dispatch(add(product))}}/>
                              {product.quantity} 
                              <FontAwesomeIcon className='fafaActions' icon={faMinus} onClick={()=>{dispatch(decreaseQuantity(product.id))}}/>
                            </span>INR {product.price}
                          </div>
                          <button className='removeBtn' onClick={() => { dispatch(remove(product.id)) }}>Remove</button>
                      </div>
                  </div>
              )}
              {
                !products.length && <marquee style={{color: '#fff94282',fontSize:'18px',
                  background: '#9f8a892b',
                  padding: '1em'}}>No Items in Cart</marquee>
              }
      {
        showToastr ? <Toastr type='removeAll' message="Are you sure you want to remove all items?" toasterClosed={confirmRemove}/> : ''
      }
      </div>
      </>
    }
  return (
    <>
    {loggedIn ? cartView()  : <Navigate to='/login' />}
    
    </>
  )
}

export default Cart