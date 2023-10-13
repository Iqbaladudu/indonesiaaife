"use client";

import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Button from "@/components/variants/button";
import Image from "next/image";

import styles from "./styles.module.css";

const LoginPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-primary vh-100 d-none d-sm-block"></Col>
        <Col className="bg-light vh-100 d-flex align-items-center justify-content-center">
          <Row>
            <div
              style={{ marginBottom: "43px" }}
              className="d-flex flex-column justify-content-center text-center a"
            >
              <p className="fs-heading fw-bold">Hello Again</p>
              <p className="fs-regular fw-normal">
                Login to start an exciting journey
              </p>
            </div>
            <div>
              <LoginForm />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

function EmailForm(props) {
  return (
    <div>
      <Form.Label>Email</Form.Label>
      <div
        className={`d-flex rounded-3 border overflow-hidden border-1 ${
          props.inputEmail && styles.boxShadowPrimary
        }`}
      >
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="bg-light border border-0"
          onFocus={() => props.setInputEmail(true)}
          onBlur={() => props.setInputEmail(false)}
          aria-label="email"
        />
        <div className="mx-3 fs-heading fw-bold text-gray">
          <Image src="/email.svg" alt="Email" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

function PasswordForm(props) {
  return (
    <div className="d-flex flex-column gap-0 row-gap-3">
      <div>
        <Form.Label>Password</Form.Label>
        <div
          className={`d-flex rounded-3 border overflow-hidden border-1 ${
            props.inputPassword && styles.boxShadowPrimary
          }`}
        >
          <Form.Control
            type="password"
            placeholder="Enter password"
            className="bg-light border border-0"
            onFocus={() => props.setInputPassword(true)}
            onBlur={() => props.setInputPassword(false)}
            aria-label="password"
            id="a"
          />
          <div className="mx-3 fs-heading fw-bold text-gray">
            <Image src="/lock.svg" alt="Lock" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <Form.Check type="checkbox" id="remember-password" label="Ingat saya" />
        <Link
          href="#"
          className="text-primary link-underline link-underline-opacity-0"
        >
          Lupa password?
        </Link>
      </div>
    </div>
  );
}

const LoginForm = () => {
  const [inputEmail, setInputEmail] = useState(false);
  const [inputPassword, setInputPassword] = useState(false);

  return (
    <Form>
      <Form.Group
        className="mb-3 d-flex flex-column gap-0 row-gap-5"
        controlId="formBasicEmail"
      >
        <EmailForm inputEmail={inputEmail} setInputEmail={setInputEmail} />
        <PasswordForm
          inputPassword={inputPassword}
          setInputPassword={setInputPassword}
        />
        <Button>Login</Button>
      </Form.Group>
      <div className="d-flex justify-content-center">
        <p>
          Belum punya akun?{" "}
          <Link
            href="#"
            className="text-primary link-underline link-underline-opacity-0"
          >
            Daftar
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default LoginPage;
