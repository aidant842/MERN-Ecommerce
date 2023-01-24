import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./reducers/productReducers";
import thunk from "redux-thunk";

const reducer = {
    productList: productListReducer,
};

const initialState = {};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
    initialState,
});

export default store;
