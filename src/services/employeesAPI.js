import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeesApi = createApi({
	reducerPath: "employees",
	baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5001/api" }),

	endpoints: (builder) => ({
		getEmployees: builder.query({
			query: () => `/employee`,
		}),
		getEmployee: builder.query({
			query: (id) => `/employee/${id}`,
		}),
	}),
});

export const { useGetEmployeeQuery, useGetEmployeesQuery } = employeesApi;
