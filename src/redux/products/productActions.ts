import { addProduct, deleteProduct, getALlProducts } from "@/api/product";
import { Product } from "@/types/product";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const getAll = createAsyncThunk(
  "products/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getALlProducts();
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
const removeProduct = createAsyncThunk(
  "products/remove",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id);
      return response?.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
const add = createAsyncThunk(
  "products/add",
  async (data: Product, { rejectWithValue }) => {
    try {
      const response = await addProduct(data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
export { getAll, removeProduct, add };
