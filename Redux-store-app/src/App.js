import './App.css';
import {
  createBrowserRouter,
  RouterProvider,createRoutesFromElements,
  Route
} from "react-router-dom";
import Cart from './components/Cart';
import RootLayout from './RootLayout';
import Home from './pages/Home';
import { Login } from './pages/Login';
import PageNotFound from './pages/PageNotFound';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       <Route path='/home' element={<Home />}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path="*" element={<PageNotFound />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );

}

export default App;
