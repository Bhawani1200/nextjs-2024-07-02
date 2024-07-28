import { createSlice } from "@reduxjs/toolkit";
import { add, getAll, removeProduct } from "./productActions";
import { Product, ProductsQuery } from "@/types/product";

type ProductState = {
  loading: boolean;
  products: Product[];
  error: string | null;
  deleteSuccess: boolean;
  addSuccess: boolean;
  query: ProductsQuery;
};
const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  deleteSuccess: false,
  addSuccess: false,
  query: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetDeleteSuccess: (state) => {
      state.deleteSuccess = false;
    },
    resetAddSuccess: (state) => {
      state.addSuccess = false;
    },
    setLimit: (state, action) => {
      state.query = { ...state.query, limit: action.payload };
    },
    setSort: (state, action) => {
      state.query = { ...state.query, sort: action.payload };
    },
    setFilters: (state, action) => {
      state.query = { ...state.query, filters: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(removeProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteSuccess = true;
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(add.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(add.fulfilled, (state, action) => {
        state.loading = false;
        state.addSuccess = true;
      })
      .addCase(add.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  resetDeleteSuccess,
  resetAddSuccess,
  setLimit,
  setSort,
  setFilters,
} = productSlice.actions;
export default productSlice.reducer;
