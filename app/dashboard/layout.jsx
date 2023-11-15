"use client";

import HorizontalNavbar from "@/components/navbar/horizontalNavbar";
import VerticalNavbar from "@/components/navbar/verticalNavbar";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { permanentRedirect, usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const pathname = usePathname();
  if (pathname === "/dashboard") {
    permanentRedirect("/dashboard/home/");
  }

  return (
    <Container fluid className="bg-gray d-flex flex-column vh-100 p-0">
      <HorizontalNavbar />
      <Container fluid className="p-0 flex-grow-1">
        <Row className="m-0 vh-100">
          <VerticalNavbar />
          <Col
            className={`row d-flex flex-column gap-0 row-gap-5 justify-content-start m-0 bg-gray${
              isMobile ? "p-4" : "p-5"
            }`}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
