import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../components/CartSlice'
import ProductSlice from '../components/ProductSlice'
const store = configureStore({
  reducer: {
    cart : CartSlice,
    product : ProductSlice
  }
})
export default store;