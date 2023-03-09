import { combineReducers, createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import { cardReducer } from "./reducers/Card";
import { drawerReducer } from "./reducers/Drawer";
import { productsDetailReducer } from "./reducers/ProductDetail";
import { productsReducer } from "./reducers/Products";
import { searchReducer } from "./reducers/Search";

   const cardItems =JSON.parse(localStorage.getItem('cardItems')) || []
let initialState = {
   card: {cardItems}
}

const reducers = combineReducers({
    drawer: drawerReducer,
    products: productsReducer,
    product: productsDetailReducer,
    card: cardReducer,
    search: searchReducer,
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store ;