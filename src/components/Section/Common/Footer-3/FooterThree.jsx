/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
   return (
    <footer className="zubuz-footer-section main-footer bg-white text-black black-bg">
      <div className="container">
        <div className="zubuz-footer-top">
          <div className="lg:flex-row md:flex-col flex-col  flex justify-between">
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea">
                <Link href="">
                  <img src="/images/logo/logo.png" alt="" className="w-[150px]"/>
                </Link>
                 <p className="text-black text-sm open-sans">
                  We're your innovation partner, delivering cutting-edge
                  solutions that elevate your business to the next level.
                </p>
                <div className="zubuz-subscribe-one">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button
                      className="zubuz-default-btn zubuz-subscription-btn one"
                      id="zubuz-subscription-btn"
                      type="submit"
                    >
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
      
            
            <div className="col-xl-3 text-black  col-md-4">
              <div className="zubuz-footer-menu extar-margin">
                <div className="zubuz-footer-title">
                  <p>Quick Links</p>
                </div>
                <ul>
                   <p className="text-black text-sm open-sans">
                    <Link href="/">Home</Link>
                  </p>
                  
                   <p className="text-black text-sm open-sans">
                    <Link href="/service">Services</Link>
                  </p>
                   <p className="text-black text-sm open-sans">
                    <Link href="/Partners">Partners</Link>
                  </p>
                  <p className="text-black text-sm open-sans">
                    <Link href="/about-us">About Us</Link>
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
                  <FaTwitter color="black"/>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/" target="_blank">
                  <FaFacebookF color="black"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram color="black"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin color="black"/>
                </a>
              </li>
              
            </ul>
          </div>
          <div className="zubuz-copywright">
            <p> &copy;Copyright 2024, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
