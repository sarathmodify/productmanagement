import { useState } from 'react'
import './index.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/products/ProductList';
import ProductAdd from './pages/products/ProductAdd';

function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/addproduct' element={<ProductAdd />} />
            </Routes>
        </div>
    )
}
export default App
