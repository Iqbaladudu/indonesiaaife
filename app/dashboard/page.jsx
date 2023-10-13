"use client";

import HorizontalNavbar from "@/components/Navbar/HorizontalNavbar";
import VerticalNavbar from "@/components/Navbar/VerticalNavbar";
import { Col, Container, Row } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";

const Page = () => {
  return (
    <Container fluid className="bg-gray d-flex flex-column vh-100 vw-100 p-0">
      <HorizontalNavbar />
      <Container fluid className="p-0 flex-grow-1">
        <Row className="m-0 h-100">
          <VerticalNavbar />
          <Col className="d-flex flex-column gap-0 row-gap-5 justify-content-start p-5">
            <div className="rounded-2 bg-white h-25"></div>
            <div className="rounded-2 bg-white h-25"></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Page;
