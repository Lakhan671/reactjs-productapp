import { createSlice, configureStore } from '@reduxjs/toolkit';

const fetchProductsData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return await response.json();
};

const initialProductsState = { products: [],posts: [], editProduct: {}, isEdit: false };



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
    },
    setPosts(state,action){
      state.posts=action.payload;
    }

  },
});
export const initializeProducts = () => async (dispatch) => {
  try {
    const data = await fetchProductsData();
    dispatch(productsSlice.actions.setPosts(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const store = configureStore({
  reducer: { products: productsSlice.reducer }
});

export const productsActions = productsSlice.actions;
export default store;
