import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="zubuz-default-content m-right">
              <h2>Contact our support team</h2>
              <p className="text-base leading-loose  open-sans">
                Book an appointment with our team now!
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data ">
                    <span>Office Location:</span>
                    <p className="text-sm leading-loose  open-sans">
                      US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.
                    </p>
                    <p className="text-sm leading-loose  open-sans">
                      Nigeria Office: 20, Fola Agoro Street, Shomolu, Lagos.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data data-small">
                    <span>Social Media:</span>
                    <div className="zubuz-social-icon social-box">
                      <ul>
                        <li>
                          <Link href="https://twitter.com/">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://facebook.com/">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">
                            <FaLinkedin />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="zubuz-form-wrap">
              <h3>Fill the from below</h3>
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="zubuz-main-form">
                      <input type="text" placeholder="Your Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="zubuz-main-form">
                      <input type="email" placeholder="Email Address*" />
                    </div>
                  </div>
                </div>
                <div className="zubuz-main-form">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="zubuz-main-form">
                  <textarea
                    name="textarea"
                    placeholder="Write us your comment"
                  ></textarea>
                </div>
                <button id="zubuz-submit-btn" type="button">
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
