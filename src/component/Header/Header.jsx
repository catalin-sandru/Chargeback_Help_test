import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Stack } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark">
      <Container className="p-0" fluid>
        <Nav className="justify-content-end mx-5" varian="pills">
          <Stack direction="horizontal" gap={4}>
            <Nav.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "" : "text-decoration-none")}
                to="/"
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "" : "text-decoration-none")}
                to="/checkout"
              >
                Checkout
              </NavLink>
            </Nav.Item>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
