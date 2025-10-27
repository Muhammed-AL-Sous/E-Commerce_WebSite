import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

// Redux Extension Chrome
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import CategoriesReducer from "./Reducers/CategoriesReducer";
import BrandsReducer from "./Reducers/BrandsReducer";
import SubCategoriesReducer from "./Reducers/SubCategoryReducer";
import ProductsReducer from "./Reducers/ProductsReducer";
import { searchReducer } from "./Reducers/SearchReducer";
import { SortingProdcutsReducer } from "./Reducers/SortingProductsReducer";

const initialState = {};
const middleware = [thunk];

const rootReaducer = combineReducers({
  Categories: CategoriesReducer,
  Brands: BrandsReducer,
  SubCategories: SubCategoriesReducer,
  Products: ProductsReducer,
  search: searchReducer,
  sortingProducts : SortingProdcutsReducer
});

const store = createStore(
  rootReaducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
