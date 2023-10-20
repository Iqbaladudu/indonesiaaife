"use client";

import HorizontalNavbar from "@/components/Navbar/HorizontalNavbar";
import VerticalNavbar from "@/components/Navbar/VerticalNavbar";
import Alert from "@/components/variants/alert";
import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";

const Page = () => {
  const [alertClose, setAlertClose] = useState(false);

  return (
    <Container fluid className="bg-gray d-flex flex-column vh-100 p-0">
      <HorizontalNavbar />
      <Container fluid className="p-0 flex-grow-1">
        <Row className="m-0 h-100">
          <VerticalNavbar />
          <Col className="d-flex flex-column gap-0 row-gap-5 justify-content-start p-5">
            <div
              style={{ display: "block", position: "initial" }}
              className={`${alertClose && "d-none"}`}
            >
              <Modal.Dialog>
                <Alert variants="success">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      🔥 Kamu bisa mencoba AI Engine yang kami sediakan dalam
                      bentuk demo.{" "}
                      <span style={{ cursor: "pointer" }} className="fw-bold">
                        Coba Sekarang!
                      </span>
                    </div>
                    <div
                      className="fw-bold"
                      onClick={() => setAlertClose(true)}
                      style={{ cursor: "pointer" }}
                    >
                      X
                    </div>
                  </div>
                </Alert>
              </Modal.Dialog>
            </div>
            <div className="d-flex flex-row">
              <div className="border" style={{ width: "70%" }}>
                cek
              </div>
              <div className="border">cek</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Page;
