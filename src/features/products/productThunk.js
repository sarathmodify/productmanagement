import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
})

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
});

export const productAdd = createAsyncThunk('product/addProduct', async (addProduct, { rejectWithValue }) => {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addProduct)
    })
    const data = await response.json();
    if (!response.ok) {
        return rejectWithValue(data.message);
    }
    return data;
})