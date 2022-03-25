import React from "react";
import { useGetEmployeesQuery } from "./services/employeesAPI";

const Employee = () => {
	const { data, error, isLoading, isSuccess, isError } = useGetEmployeesQuery();

	console.log(data);

	return (
		<div className="App mt-4 py-3">
			<div className="container">
				<br />
				<br />
				<button
					className="btn btn-outline-primary"
					// onClick={() => openCloseInsertModal()}
				>
					<i className="fas fa-plus"></i>
				</button>
				<h2>Employees</h2>
				<table className="table table-default table-sm table-striped table-hover responsible">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Date Hired</th>
							<th>Department</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{isLoading && "Loading"}

						{isError && "error.message"}

						{isSuccess &&
							data &&
							data.map((employee) => (
								<tr key={employee.employeeId}>
									<td>{employee.employeeId}</td>
									<td>{employee.employeeName}</td>
									<td>{employee.dateOfJoining}</td>
									<td>{employee.departmentId}</td>
									<td>
										<button
											className="btn btn-outline-success"
											// onClick={() => selectEngine(employee, "Edit")}
										>
											<i className="fas fa-edit"></i>
										</button>{" "}
										{"   "}
										<button
											// onClick={() => selectEngine(employee)}
											className="btn btn-outline-danger"
										>
											<i className="fas fa-trash"></i>
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Employee;
