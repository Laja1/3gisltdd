'use client'
import { useState } from "react";
import Link from "next/link";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">3GIS</span>
            </a>
            <div style={{ display: 'none', marginLeft: '2.5rem', '@media (min-width: 768px)': { display: 'block' } }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <Link
                  href="/"
                  style={{
                    color: '#000',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    ':hover': {
                      backgroundColor: '#4a5568',
                      color: '#ffffff'
                    }
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/service"
                  style={{
                    color: '#000',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    ':hover': {
                      backgroundColor: '#4a5568',
                      color: '#ffffff'
                    }
                  }}
                >
                  Services
                </Link>
                <Link
                  href="/Partners"
                  style={{
                    color: '#000',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    ':hover': {
                      backgroundColor: '#4a5568',
                      color: '#ffffff'
                    }
                  }}
                >
                  Partners
                </Link>
                <Link
                  href="/about-us"
                  style={{
                    color: '#000',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    ':hover': {
                      backgroundColor: '#4a5568',
                      color: '#ffffff'
                    }
                  }}
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div style={{ display: 'none', marginLeft: '1rem', '@media (min-width: 768px)': { display: 'block' } }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/contact-us">
                <button className="bg-blue-600" style={{
          
                  color: '#ffffff',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  ':hover': {
                    backgroundColor: '#4f46e5'
                  }
                }}>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div style={{ marginRight: '-0.5rem', display: 'flex', '@media (min-width: 768px)': { display: 'none' } }}>
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-blue-600"
              style={{
              
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                color: '#fff',
                ':hover': {
                  color: '#ffffff',
                  backgroundColor: '#4a5568'
                },
                ':focus': {
                  outline: 'none',
                  ring: '2px solid #6366f1',
                  ringOffset: '2px'
                }
              }}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span style={{ display: 'none' }}>Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  style={{ display: 'block', height: '1.5rem', width: '1.5rem' }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  style={{ display: 'block', height: '1.5rem', width: '1.5rem' }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: isMenuOpen ? 'block' : 'none', '@media (min-width: 768px)': { display: 'none' } }}>
        <div style={{ padding: '0.5rem 0.75rem' }}>
          <Link
            href="/"
            style={{
              display: 'block',
              color: '#000',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '1rem',
              fontWeight: '500',
              ':hover': {
                backgroundColor: '#4a5568',
                color: '#ffffff'
              }
            }}
          >
            Home
          </Link>
          <Link
            href="/service"
            style={{
              display: 'block',
              color: '#000',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '1rem',
              fontWeight: '500',
              ':hover': {
                backgroundColor: '#4a5568',
                color: '#ffffff'
              }
            }}
          >
            Services
          </Link>
          <Link
            href="/Partners"
            style={{
              display: 'block',
              color: '#000',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '1rem',
              fontWeight: '500',
              ':hover': {
                backgroundColor: '#4a5568',
                color: '#ffffff'
              }
            }}
          >
            Partners
          </Link>
          <Link
            href="/Projects"
            style={{
              display: 'block',
              color: '#000',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '1rem',
              fontWeight: '500',
              ':hover': {
                backgroundColor: '#4a5568',
                color: '#ffffff'
              }
            }}
          >
           Projects
          </Link>
          <Link
            href="/about-us"
            style={{
              display: 'block',
              color: '#000',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.25rem',
              fontSize: '1rem',
              fontWeight: '500',
              ':hover': {
                backgroundColor: '#4a5568',
                color: '#ffffff'
              }
            }}
          >
            About Us
          </Link>
          <Link href="/contact-us">
            <button
              className="bg-blue-600"
              style={{
               
                width: '100%',
                color: '#ffffff',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.25rem',
                fontSize: '1rem',
                fontWeight: '500',
                ':hover': {
                  backgroundColor: '#4f46e5'
                }
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
  