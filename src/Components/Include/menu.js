import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [getdata, setData] = useState([]);
  
  const categories = getdata?.data?.data?.items;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://otruyenapi.com/v1/api/the-loai");
        setData(response);
        console.log(response);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React Comic App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/trending/dang-phat-hanh">Đang phát hành</Nav.Link>
            <Nav.Link as={Link} to="/trending/hoan-thanh">Hoàn thành</Nav.Link>
            <Nav.Link as={Link} to="/trending/sap-ra-mat">Sắp ra mắt</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {categories && categories.length > 0 ? (
                categories.map((category, index) => (
                  <NavDropdown.Item as={Link} to={`/genre/${category.slug}`}>{category.name}</NavDropdown.Item>
                ))
              ): (
                <NavDropdown.Item as={Link} to="/">Newest</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
