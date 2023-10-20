import { useState } from "react";
import {
  BsHouseDoor,
  BsPerson,
  BsUpload,
  BsTextareaT,
  BsFillImageFill,
  BsInfoCircle,
  BsHeadset,
  BsChevronDown,
} from "react-icons/bs";

import styles from "./verticalNavbar.module.css";
import { useCollapseStore } from "@/app/store";
import { useMediaQuery } from "react-responsive";

const menu = [
  {
    nama: "Beranda",
    icon: <BsHouseDoor />,
  },
  {
    nama: "Upload",
    icon: <BsUpload />,
  },
  {
    nama: "Labeling",
    icon: <BsTextareaT />,
  },
  {
    nama: "Hasil",
    icon: <BsFillImageFill />,
  },
  {
    nama: "Profil Akun",
    icon: <BsPerson />,
  },
];

const information = [
  {
    nama: "Tutorial",
    icon: <BsInfoCircle />,
  },
  {
    nama: "Help & Support",
    icon: <BsHeadset />,
  },
];

const engine = [
  {
    nama: "Demo",
    icon: <BsInfoCircle />,
  },
  {
    nama: "Lihat Info",
    icon: <BsHeadset />,
  },
];

const projectList = [
  { label: "Second Project", icon: "" },
  { label: "Three Project", icon: "" },
];

function ProjectModal({ show }) {
  return (
    <div
      className={`card ${
        styles.modal
      } my-component d-flex p-3 border-0 shadow-lg ${!show && "invisible"}`}
    >
      <p style={{ fontSize: "13px" }}>Daftar Project</p>
      {projectList.map(({ label, icon }, index) => (
        <div className="d-flex flex-row gap-0 column-gap-2" key={index}>
          <div
            style={{ height: "28px", width: "28px" }}
            className="bg-primary rounded-2"
          ></div>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

const VerticalNavbar = () => {
  const [menuList, setMenuList] = useState("Beranda");
  const collapse = useCollapseStore((state) => state.collapse);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={`bg-light d-flex flex-column justify-content-start pt-5 gap-0 row-gap-3 ${
          collapse
            ? isMobile
              ? "d-none"
              : styles.collapse
            : styles.fullWidthSidebar
        }`}
      >
        <div
          className={`d-flex flex-column gap-0 row-gap-4 ${collapse &&
            "align-items-center"}`}
        >
          <div
            className={`d-flex flex-row gap-0 column-gap-3 p-2 ${!collapse &&
              "bg-gray"}`}
          >
            <div
              style={{ width: "42px", height: "42px" }}
              className={`bg-primary ${
                collapse ? "rounded-circle" : "rounded-3"
              }`}
              onClick={() => setShow(!show)}
            ></div>
            <div
              className={`d-flex flex-row gap-0 column-gap-3 align-items-center ${collapse &&
                "d-none"}`}
              onClick={() => setShow(!show)}
            >
              <div className="d-flex flex-column">
                <p
                  style={{ fontSize: "16px" }}
                  className="m-0 text-primary fw-bold"
                >
                  First Project
                </p>
                <p style={{ fontSize: "12px" }} className="m-0">
                  Indo AI Workspace
                </p>
              </div>
              <div className="fw-bold">
                <BsChevronDown />
              </div>
            </div>
          </div>
          <ProjectModal show={show} />
          <div className="d-flex flex-column gap-0 row-gap-2">
            <p
              className={`m-0 fw-light px-4 fw-bold ${
                collapse || isMobile ? "d-none" : ""
              }`}
            >
              AI Engine
            </p>
            <div className="d-flex flex-column gap-0 row-gap-2">
              {engine.map(({ nama, icon }, index) => (
                <div key={index}>
                  <div
                    className={`w-100 rounded-5 d-flex flex-row align-items-center gap-0 column-gap-1 ${menuList ===
                      nama && "bg-primary-light text-primary"} ${
                      collapse || isMobile ? "p-2" : "px-4 py-2"
                    }`}
                    key={index}
                    onClick={() => setMenuList(nama)}
                  >
                    {icon}{" "}
                    <span className={`${collapse || isMobile ? "d-none" : ""}`}>
                      {nama}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column gap-0 row-gap-2">
            <p
              className={`m-0 fw-light px-4 fw-bold ${
                collapse || isMobile ? "d-none" : ""
              }`}
            >
              Annotation Tool
            </p>
            <div className="d-flex flex-column gap-0 row-gap-2">
              {menu.map(({ nama, icon }, index) => (
                <div key={index}>
                  <div
                    className={`text-start w-100 rounded-5 d-flex flex-row align-items-center gap-0 column-gap-1 ${menuList ===
                      nama && "bg-primary-light text-primary"} ${
                      collapse || isMobile ? "p-2" : "px-4 py-2"
                    }`}
                    key={index}
                    onClick={() => setMenuList(nama)}
                  >
                    {icon}{" "}
                    <span className={`${collapse || isMobile ? "d-none" : ""}`}>
                      {nama}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column gap-0 row-gap-2">
            <p
              className={`m-0 fw-light px-4 fw-bold ${
                collapse || isMobile ? "d-none" : ""
              }`}
            >
              Annotation Tool
            </p>
            <div className="d-flex flex-column gap-0 row-gap-2">
              {information.map(({ nama, icon }, index) => (
                <div key={index}>
                  <div
                    className={`text-start w-100 rounded-5 d-flex flex-row align-items-center gap-0 column-gap-1 ${menuList ===
                      nama && "bg-primary-light text-primary"} ${
                      collapse ? "p-2" : "px-4 py-2"
                    }`}
                    key={index}
                    onClick={() => setMenuList(nama)}
                  >
                    {icon}{" "}
                    <span className={`${collapse && "d-none"}`}>{nama}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;
