import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeesApi } from "../services/employeesAPI";
import { departmentsApi } from "../services/departmentsAPI";

export const store = configureStore({
	reducer: {
		[employeesApi.reducerPath]: employeesApi.reducer,
		[departmentsApi.reducerPath]: departmentsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(employeesApi.middleware),
});

setupListeners(store.dispatch);
