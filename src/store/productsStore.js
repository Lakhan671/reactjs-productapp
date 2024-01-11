import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialProductsState = { products: [], editProduct:{}, isEdit: false };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addProduct(state,action) {
      state.products.push(action.payload);
    },
    editProduct(state, action) {
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.pid === action.payload.pid) {
            return action.payload;
          }
          return item;
        }),
      };
    }
,    
    deleteProduct(state, action) {
      state.products=state.products.filter((item) => item.pid !== action.payload);
    },
    isEditStatus(state,action){
      state.isEdit=action.payload;
    },
    setEditProduct(state,action){
    state.editProduct=action.payload;
    }

  },
});

const store = configureStore({
  reducer: { products: productsSlice.reducer }
});

export const productsActions = productsSlice.actions;
export default store;
