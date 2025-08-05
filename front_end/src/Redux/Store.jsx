import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

// Redux Extension Chrome
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import CategoriesReducer from "./Reducers/CategoriesReducer";
import ProductsReducer from "./Reducers/ProductsReducer";

const initialState = {};
const middleware = [thunk];

const rootReaducer = combineReducers({
  Categories: CategoriesReducer,
  // Products: ProductsReducer,
});

const store = createStore(
  rootReaducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
