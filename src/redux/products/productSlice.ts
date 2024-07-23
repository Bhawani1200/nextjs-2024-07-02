import { createSlice } from "@reduxjs/toolkit";
import { getAll, removeProduct } from "./productActions";
import { Product } from "@/types/product";

type ProductState = {
  loading: boolean;
  products: Product[];
  error: string | null;
  deleteSuccess: boolean;
};
const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  deleteSuccess: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetDeleteSuccess: (state) => {
      state.deleteSuccess = false;
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
      });
  },
});

export const { resetDeleteSuccess } = productSlice.actions;
export default productSlice.reducer;
