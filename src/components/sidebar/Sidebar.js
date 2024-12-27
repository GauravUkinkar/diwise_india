import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import './Sidebar.scss'; // Add your styles here

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the offcanvas
  const openOffcanvas = () => setIsOpen(true);

  // Function to close the offcanvas
  const closeOffcanvas = () => setIsOpen(false);


function Sidebar() {
  return (
    <>
      {/* Button to open offcanvas */}
      <div
        className="grid-icon bg-img-contain"
        type="button"
        onClick={openOffcanvas}
      ></div>

      {/* Offcanvas */}
      <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <div className="canvas-logo bg-img-contain"></div>
          <button
            type="button"
            className="btn-close close-canvas"
            onClick={closeOffcanvas}
          >
            X
          </button>
        </div>
        <div className="offcanvas-body canvas-body">
          <h2>About Us</h2>
          <p>
            We work with forward-thinking companies to craft and produce impactful solutions through website & mobile app experiences...
          </p>
          <h4>Contact us</h4>
          <div className="icon-boxh">
            <span className="iconsh"><MdOutlineMail /></span>
            <p className="address">info@diwise.in</p>
          </div>
          <div className="icon-boxh">
            <span className="iconsh"><HiOutlinePhone /></span>
            <p className="address">+91 8482936866</p>
          </div>
          <div className="icon-boxh">
            <span className="iconsh"><IoLocationOutline /></span>
            <p className="address">
              Office No. 214-216, 10 Biz Park, Near Symbiosis Law College, Airport Road, Vimannagar, Pune- 411014
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
}

export default Sidebar


