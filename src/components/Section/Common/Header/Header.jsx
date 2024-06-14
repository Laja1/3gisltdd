"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Header = ({ logoSrc }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Define the styles for the active link
  const activeLinkStyle = {
    color: "blue", // Change this to your desired color
    fontWeight: "bold", // You can add additional styles as needed
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
    const submenuAll = document.querySelectorAll(".sub-menu");
    submenuAll.forEach((submenu) => {
      submenu.classList.remove("active");
      submenu.style.animation = "";
    });
    document.querySelector(".go-back").classList.remove("active");
  };

  const overlayClickHandler = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
    document.querySelector(".menu-overlay").classList.toggle("active");
  };

  const showSubMenu = (hasChildren) => {
    const submenuAll = document.querySelectorAll(".sub-menu");
    submenuAll.forEach((submenu) => submenu.classList.remove());
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuArray([...subMenuArray, subMenu.id]);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    setSubMenuTextArray([...subMenuTextArray, menuTitle]);
    document.querySelector(".current-menu-title").innerHTML = menuTitle;
    document.querySelector(".mobile-menu-head").classList.add("active");
  };

  const menuMainClickHandler = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });

      const hasChildren = e.target.closest(".nav-item-has-children");
      if (hasChildren) {
        e.preventDefault();
        if (hasChildren.classList.contains("nav-item-has-children")) {
          showSubMenu(hasChildren);
        }
      }
    }
  };

  return (
    <header
      className="site-header site-header--menu-center zubuz-header-section dark-bg white-menu"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <BrandLogo imageSrc="/images/logo/logo.png" />
          <div className="menu-block-wrapper">
            <div className="menu-overlay" onClick={overlayClickHandler}></div>
            <nav
              className={`menu-block ${isActive ? "active" : ""}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div className="go-back">
                  <FaAngleLeft />
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close" onClick={closeMenuClickHandler}>
                  &times;
                </div>
              </div>
              <ul className="site-menu-main" onClick={menuMainClickHandler}>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link-item"
                    style={currentPath === "/" ? activeLinkStyle : {}}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/service"
                    className="nav-link-item"
                    style={currentPath === "/service" ? activeLinkStyle : {}}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Projects"
                    className="nav-link-item"
                    style={currentPath === "/Projects" ? activeLinkStyle : {}}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about-us"
                    className="nav-link-item"
                    style={currentPath === "/about-us" ? activeLinkStyle : {}}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/Partners"
                    className="nav-link-item"
                    style={currentPath === "/Partners" ? activeLinkStyle : {}}
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link href="/contact-us">
              <button
                style={{ borderRadius: 5 }}
                className="w-full bg-blue-600 text-white block px-3 py-2 text-base font-medium hover:bg-blue-500"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div
            className="mobile-menu-trigger light"
            onClick={menuTriggerClickHandler}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;