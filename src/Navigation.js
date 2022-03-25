import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
	return (
		<Navbar bg="primary" variant="dark" expand="lg collapseOnSelect">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>Employees Portal </Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
				</Navbar.Toggle>
				<LinkContainer to="/employee">
					<Navbar.Brand>Employees </Navbar.Brand>
				</LinkContainer>

				<LinkContainer to="/departments">
					<Navbar.Brand>Deparments </Navbar.Brand>
				</LinkContainer>
			</Container>
		</Navbar>
	);
};

export default Navigation;
