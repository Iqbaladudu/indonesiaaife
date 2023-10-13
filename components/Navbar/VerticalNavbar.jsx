import { useState } from "react";
import {
  BsChevronDown,
  BsHouseDoor,
  BsPerson,
  BsUpload,
  BsTextareaT,
  BsFillImageFill,
  BsInfoCircle,
  BsHeadset,
} from "react-icons/bs";

import styles from "./verticalNavbar.module.css";

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

const VerticalNavbar = () => {
  const [menuList, setMenuList] = useState("Beranda");

  return (
    <>
      <div
        className={`bg-light d-flex flex-row justify-content-center py-4 ${styles.sidebarStyling}`}
      >
        <div className="d-flex flex-column gap-0 row-gap-4 m-0">
          <div className="d-flex bg-gray p-2 rounded-2 flex-row gap-0 align-items-center column-gap-4">
            <div
              className="rounded-circle bg-primary"
              style={{
                height: "42px",
                width: "42px",
              }}
            ></div>
            <div className="d-flex flex-row gap-0 align-items-center column-gap-3">
              <div>
                <p className="fw-bold text-primary m-0">First Project</p>
                <p className="fw-light m-0" style={{ fontSize: "10px" }}>
                  Indo AI Workspaces
                </p>
              </div>
              <BsChevronDown />
            </div>
          </div>
          <div className="d-flex flex-column gap-0 row-gap-2">
            <p className="m-0 fw-light">Menu</p>
            <div className="d-flex flex-column gap-0 row-gap-2">
              {menu.map(({ nama, icon }, index) => (
                <div key={index}>
                  <button
                    className={`btn text-start w-100 rounded-5 px-4 d-flex flex-row align-items-center gap-0 column-gap-1 ${
                      menuList === nama && "btn-primary-light text-primary"
                    }`}
                    key={index}
                    onClick={() => setMenuList(nama)}
                  >
                    {icon} {nama}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column gap-0 row-gap-2">
            <p className="m-0 fw-light">Information</p>
            <div className="d-flex flex-column gap-0 row-gap-2">
              {information.map(({ nama, icon }, index) => (
                <div key={index}>
                  <button
                    className={`btn text-start w-100 rounded-5 px-4 d-flex flex-row align-items-center gap-0 column-gap-1 ${
                      menuList === nama && "btn-primary-light text-primary"
                    }`}
                    key={index}
                    onClick={() => setMenuList(nama)}
                  >
                    {icon} {nama}
                  </button>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;
