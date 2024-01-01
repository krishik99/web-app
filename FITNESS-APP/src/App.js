import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import { ErrorBoundary } from 'react-error-boundary';
const App = () => {
  return (
    <>
    <ErrorBoundary fallback={<div style={{ fontSize: '22px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Something went wrong!</div>}>
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/exercise/:id' element={<ExerciseDetails />}/>
            </Routes>
    </Box>
    <Footer />
    </ErrorBoundary>
    </>
  )
}

export default App