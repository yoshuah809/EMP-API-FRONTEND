import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentsApi = createApi({
	reducerPath: "departments",
	baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5001/api" }),

	endpoints: (builder) => ({
		getDepartments: builder.query({
			query: () => `/department`,
		}),
		getDepartment: builder.query({
			query: (id) => `/department/${id}`,
		}),
	}),
});

export const { useGetDepartmentsQuery, useGetDepartmentQuery } = departmentsApi;
