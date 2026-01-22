import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, deleteProduct, productAdd } from "./productThunk";


const initialState = {
    product: [],
    isLoading: false,
    error: null
}

const productSlide = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Fetch Products
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

        // Delete Product
        builder.addCase(deleteProduct.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                // Remove the deleted product from the state
                // Note: FakeAPI returns the deleted product, but we need to filter by ID
                // The productId is available in action.meta.arg
                console.log(action, "actiondelete")
                const deletedProductId = action.meta.arg;
                state.product = state.product.filter(p => p.id !== deletedProductId);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

        //add product
        builder.addCase(productAdd.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(productAdd.fulfilled, (state, action) => {
                console.log(action, "actionadd")
                state.isLoading = false;
                state.product.push(action.payload);
            })
            .addCase(productAdd.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }

})

export default productSlide.reducer;
