import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const LogIn = createAsyncThunk(
  'auth/LogIn', 
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: credentials.email, 
          password: credentials.password,
        }),
      });

      

      const json = await response.json();
      localStorage.setItem('token', json.token);
      return json; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { data: '', error: '', user: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LogIn.pending, (state) => {
        state.data = 'Loading';
        state.error = '';
      })
      .addCase(LogIn.fulfilled, (state, action) => {
        state.data = 'succeeded';
        state.user = action.payload; 
      })
      .addCase(LogIn.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong'; 
        state.data = 'failed';
      });
  },
});

export default authSlice.reducer;
