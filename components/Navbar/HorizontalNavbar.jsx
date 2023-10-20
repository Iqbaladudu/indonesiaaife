"use client";

import React, { useState } from "react";
import { Navbar as BaseNavbar, Container } from "react-bootstrap";
import {
  BsList,
  BsFillBellFill,
  BsFillMoonFill,
  BsCaretDown,
} from "react-icons/bs";
import axioma from "@/public/axioma.svg";
import Image from "next/image";
import styles from "./horizontalNavbar.module.css";
import avatar from "@/public/avatar.png";
import { useCollapseStore } from "@/app/store";

const profileMenu = [
  {
    nama: "Tutorial",
    icon: "Profile Akun",
  },
  {
    nama: "Notifikasi",
    icon: "",
  },
  {
    nama: "Tutorial",
    icon: "",
  },
  {
    nama: "Help & Support",
    icon: "",
  },
  {
    nama: "Keluar",
    icon: "",
  },
];

const NavbarBrand = () => {
  const toggle = useCollapseStore((state) => state.toggle);

  return (
    <>
      <div className="d-flex flex-row gap-0 column-gap-5 align-items-center">
        <div className="">
          <BsList style={{ fontSize: "30px" }} onClick={() => toggle()} />
        </div>
        <div className="d-flex gap-0 column-gap-3 align-items-center">
          <Image src={axioma} alt="" />
          <span className="fw-bold">Axioma</span>
        </div>
      </div>
    </>
  );
};

function ProfileModal({ show }) {
  return (
    <div
      className={`card ${
        styles.modal
      } my-component d-flex p-3 border-0 shadow-lg ${!show && "invisible"}`}
    >
      <div className="d-flex p-2 rounded-2 flex-row gap-0 align-items-center column-gap-4">
        <div
          className="rounded-circle bg-primary overflow-hidden"
          style={{
            height: "60px",
            width: "60px",
          }}
        >
          <Image src={avatar} alt="" />
        </div>
        <div className="d-flex flex-row gap-0 align-items-center column-gap-3">
          <div>
            <p
              className="fw-bold text-black m-0"
              style={{
                fontSize: "17px",
              }}
            >
              Fullname User
            </p>
            <p
              className="fw-regular m-0 text-gray-dark"
              style={{
                fontSize: "12px",
              }}
            >
              Nick Name User
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-0 row-gap-2">
        {profileMenu.map(({ nama, icon }, index) => (
          <div key={index}>
            <button
              className={`btn text-gray-dark text-start w-100 rounded-5 px-4 d-flex flex-row align-items-center gap-0 column-gap-1"
                }`}
              key={index}
            >
              {icon} {nama}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const NavbarRightIcons = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div
      className="d-flex text-gray-dark gap-0 align-items-center column-gap-4"
      style={{ fontSize: "25px" }}
    >
      <div className="d-flex flex-row align-items-center gap-0 column-gap-2">
        <BsFillBellFill />
        <BsFillMoonFill />
      </div>
      <div
        className="d-flex flex-row align-items-center gap-0 column-gap-2"
        onClick={() => setShowProfileModal(!showProfileModal)}
      >
        <div
          style={{ height: "42px", width: "42px" }}
          className="bg-primary rounded-circle"
        ></div>
        <BsCaretDown />
      </div>
      <ProfileModal show={showProfileModal} />
    </div>
  );
};

const HorizontalNavbar = () => {
  return (
    <BaseNavbar expand="lg" className="bg-light h-auto py-4">
      <Container fluid>
        <div className="d-flex flex-row vw-100 justify-content-between">
          <NavbarBrand />
          <NavbarRightIcons />
        </div>
      </Container>
    </BaseNavbar>
  );
};

export default HorizontalNavbar;
