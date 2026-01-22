import { useState } from "react";
import { productValidation } from '../../features/products/productService';
import { useDispatch, useSelector } from "react-redux";
import { productAdd } from '../../features/products/productThunk';
import { useNavigate } from 'react-router-dom';

export default function ProductAdd() {

    const [addProduct, setAddProduct] = useState({
        title: '',
        price: '',
        category: '',
        description: "",
        image: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product, error } = useSelector((state) => state.product);

    // console.log(product, 'product');


    const handleProductList = (e) => {
        e.preventDefault();
        const isValid = productValidation(addProduct);
        if (!isValid) return;
        dispatch(productAdd(addProduct));
        if (!error) {
            navigate('/');
        }
    }

    const handleInputData = (e) => {
        // console.log(e.target.value);
        setAddProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">

                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Add New Product
                </h2>

                <form className="space-y-5" onSubmit={handleProductList}>

                    {/* Product Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product Title
                        </label>
                        <input
                            name="title"
                            onChange={handleInputData}
                            type="text"
                            placeholder="Enter product title"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            name="price"
                            onChange={handleInputData}
                            type="number"
                            placeholder="Enter price"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <input
                            onChange={handleInputData}
                            name="category"
                            type="text"
                            placeholder="Enter category"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Image URL
                        </label>
                        <input
                            onChange={handleInputData}
                            type="text"
                            name="image"
                            value='http://example.com/image.jpg'
                            placeholder="http://example.com/image.jpg"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            onChange={handleInputData}
                            rows="4"
                            placeholder="Enter product description"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Add Product
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}