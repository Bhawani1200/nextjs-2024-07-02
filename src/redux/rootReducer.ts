import { combineReducers } from "redux";
import productReducer from "./products/productSlice";
import authReducer from "./auth/authSlice";
const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
