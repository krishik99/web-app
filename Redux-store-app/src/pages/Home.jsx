import {React,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getProducts } from '../components/ProductSlice';
import Products from '../components/Products';
import { useAuth } from '../utilities/AuthContext';
import { Navigate,useLocation } from 'react-router-dom';
const Home = () => {
    const dispatch = useDispatch();
    const {loggedIn} = useAuth();
    const location = useLocation();
    console.log(location)
    useEffect(() => {
        dispatch(getProducts());
    }, [])

  return (
        <>
        {
          loggedIn ? <Products/>  : <Navigate to='/login' />
        }
        
        </>
  )
}

export default Home