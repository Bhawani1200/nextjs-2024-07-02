import { getALlProducts } from "@/api/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const getAll = createAsyncThunk(
  "products/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getALlProducts();
      return response.data;
    } catch (error) {
      const axiosError=error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
export { getAll };
