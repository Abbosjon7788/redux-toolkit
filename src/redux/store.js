import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import apiMiddleware from "./apiCall/apiMiddleware";

export const store = configureStore({
     reducer: { counter },
     middleware: [apiMiddleware]
})