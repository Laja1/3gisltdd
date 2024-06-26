"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Header = ({ logoSrc }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);
  
  const router = useRouter();
  const servicesLinkRef = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    const servicesLink = servicesLinkRef.current;
    if (servicesLink) {
      servicesLink.addEventListener('click', handleServicesLinkClick);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#services') {
        const targetSection = document.getElementById('services');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Check the initial hash on component mount
    handleHashChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      if (servicesLink) {
        servicesLink.removeEventListener('click', handleServicesLinkClick);
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleServicesLinkClick = (e) => {
    e.preventDefault();
    if (currentPath === '/') {
      window.location.hash = '#services';
    } else {
      router.push('/#services');
    }
  };

  const activeLinkStyle = {
    color: "#2D5ED8",
    fontWeight: "bold",
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
    submenuAll.forEach((submenu) => submenu.classList.remove("active"));
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
          <BrandLogo imageSrc="/images/logo/logoDark.svg" className="" />
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
                    href="/#services"
                    ref={servicesLinkRef}
                    className="nav-link-item"
                    style={currentPath === "/services" ? activeLinkStyle : {}}
                    onClick={handleServicesLinkClick}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/projects"
                    className="nav-link-item"
                    style={currentPath === "/projects" ? activeLinkStyle : {}}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    className="nav-link-item"
                    style={currentPath === "/about" ? activeLinkStyle : {}}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/partners"
                    className="nav-link-item"
                    style={currentPath === "/partners" ? activeLinkStyle : {}}
                  >
                    Partners
                  </Link>
                </li>
                   <li className="block lg:hidden">
                  <Link
                    href="/contact-us"
                    className="nav-link-item"
                    style={currentPath === "/contact-us" ? activeLinkStyle : {}}
                  >
                    Contact Us
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
