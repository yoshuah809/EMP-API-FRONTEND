import "./App.css";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Department from "./Department";
import Employee from "./Employee";
import Home from "./Home";

function App() {
	return (
		<Router>
			<div className="App">
				<h3 className="m-3 d-flex justify-content-center">React Js Tutorial</h3>
			</div>
			<Navigation />
			<main className="py-3">
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/departments" element={<Department />} exact />
					<Route path="/employee" element={<Employee />} exact />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
