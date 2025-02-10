import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchByCategory',
    async (category) => {
        const url = category === "all" 
            ? 'https://fakestoreapi.com/products' 
            : `https://fakestoreapi.com/products/category/${category}`;

        const response = await fetch(url);
        return await response.json();
    }
);

// Add a product
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (newProduct) => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    }
);

// **Update a product**
export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ productId, updatedProduct }) => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json();
    }
);

// **Delete a product**
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId) => {
        await fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "DELETE"
        });
        return productId; // Return ID to remove from state
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null,
        currentCategory: "all",
    },
    reducers: {
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    }
});

export const { setCurrentCategory } = productsSlice.actions;
export default productsSlice.reducer;