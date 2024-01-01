import { React } from 'react'
import { Provider } from 'react-redux';
import { Outlet } from "react-router-dom";
import store from './store/store';
import Navbar from './components/Navbar';
import { AuthProvider } from './utilities/AuthContext';
import { ErrorBoundary } from 'react-error-boundary';
import Footer from './components/Footer';
const RootLayout = () => {
  console.log('rootlayout')
  return (
    <ErrorBoundary fallback={<div style={{ fontSize: '22px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Something went wrong!</div>}>
      <AuthProvider>
        <Provider store={store}>
          <Navbar />
          <main className='main'>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </Provider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default RootLayout