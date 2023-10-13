"use client";

import { Container } from "react-bootstrap";
import { HorizontalNavbar, VerticalNavbar } from "./Navbar";

const DashboardContainer = ({ children }) => {
  return (
    <Container fluid className="bg-gray vh-100 vw-100 p-0">
      <HorizontalNavbar />
      <VerticalNavbar />
    </Container>
  );
};

export default DashboardContainer;
