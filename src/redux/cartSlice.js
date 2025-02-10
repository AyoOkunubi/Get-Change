import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCarts = createAsyncThunk('cart/fetchCarts', async () => {
    const response = await fetch('https://fakestoreapi.com/carts');
    return response.json();
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        loading: false,
        error: null,
    },
    reducers: {
        addCart: (state, action) => {
            state.carts.push(action.payload);
        },
        deleteCart: (state, action) => {
            state.carts = state.carts.filter(cart => cart.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCarts.fulfilled, (state, action) => {
                state.loading = false;
                state.carts = action.payload;
            })
            .addCase(fetchCarts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;