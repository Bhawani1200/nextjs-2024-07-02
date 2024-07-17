import { getALlProducts } from "@/api/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAll = createAsyncThunk("products/all", async () => {
  const response = await getALlProducts();
  console.log(response)
  return response.data;
});
export { getAll };
