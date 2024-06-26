/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  const router = useRouter();

  const handleServicesLinkClick = (e) => {
    e.preventDefault();
    const targetUrl = '/#services';

    if (window.location.pathname === '/') {
      const targetSection = document.getElementById('services');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(targetUrl);
    }
  };

  return (
    <footer className="zubuz-footer-section main-footer bg-black text-white black-bg">
      <div className="container">
        <div className="zubuz-footer-top">
          <div className="lg:flex-row md:flex-col flex-col flex justify-between">
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea">
                <Link href="">
                  <img src="/images/logo/logo.png" alt="logo" className="lg:w-64 imac:w-80 md:w-52 w-44" />
                </Link>
                <p className='text-base'>
                  We're your innovation partner, delivering cutting-edge
                  solutions that elevate your business to the next level.
                </p>
               
              </div>
            </div>
            <div className="col-xl-3 text-white col-md-4">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Quick Links</p>
                </div>
                <ul className="space-y-5">
                  <p className="text-white text-base font-bold open-sans">
                    <Link href="/">Home</Link>
                  </p>
                  <p className="text-white text-base font-bold open-sans">
                    <Link href="/#services" onClick={handleServicesLinkClick}>
                      Services
                    </Link>
                  </p>
                  <p className="text-white text-base font-bold open-sans">
                    <Link href="/projects">Projects</Link>
                  </p>
                  <p className="text-white text-base font-bold open-sans">
                    <Link href="/partners">Partners</Link>
                  </p>
                  <p className="text-white text-base font-bold open-sans">
                    <Link href="/about">About Us</Link>
                  </p>
                   <p className="text-white text-base font-bold open-sans">
                    <Link href="/contact-us">Contact Us</Link>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="zubuz-footer-bottom">
          <div className="zubuz-social-icon order-md-2">
            <ul>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <FaTwitter color="white" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/" target="_blank">
                  <FaFacebookF color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram color="white" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin color="white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="zubuz-copywright">
            <p> &copy;Copyright 2024, All Rights Reserved by 3GIS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  