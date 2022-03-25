import React from "react";
import { useGetDepartmentsQuery } from "./services/departmentsAPI";

const Department = () => {
	const { data, error, isLoading, isSuccess, isError } =
		useGetDepartmentsQuery();
	console.log(data);

	return (
		<div className="container">
			<h1>Departments</h1>
		</div>
	);
};

export default Department;
