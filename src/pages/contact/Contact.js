import React, { useState } from 'react'
import axios from 'axios';
import './Contact.scss';
import { PiPhoneLight } from 'react-icons/pi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail, AiTwotoneMail } from 'react-icons/ai';

function Contact() {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",

    });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://62.72.56.158:5000/contact/addContact`,
                contactData
            );
            console.log(response, 'ddddd');
            alert('Form Submitted Successfully')

        } catch (error) {
            alert('Something Wrong')

        }
    }



    return (

        <>
            <div className="contact-parent parent">
                <div className="contact-container container  ">
                    <div
                        className="contact-left">
                        <div className="left-cont">
                            <h2>Contact Us</h2>
                            <p className="contact-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <form className='contact-form' onSubmit={onSubmit}>
                                <input type='text' placeholder='Name' name='name'
                                    value={contactData.name}
                                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                                />

                                <input type='email' placeholder='Email'
                                    name='email'
                                    value={contactData.email}
                                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                                />
                                <input type='tel' placeholder='Phone' name='contact'
                                    value={contactData.contact}
                                    onChange={(e) => 
                                        {
                                            const value = e.target.value;
                                            // Allow only numbers and limit to 10 characters
                                            if (/^\d*$/.test(value)) {
                                        setContactData({ ...contactData, contact: e.target.value })
                                            }}}
                                    maxLength="10"
                                />
                                <textarea rows={3}
                                    placeholder='Message' name='message'
                                    value={contactData.message}
                                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}

                                >
                                </textarea>
                                <button className='cta cta1'>Submit</button>

                            </form>
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="orange-box"></div>
                        <div className="right-cont">

                            <h3>Info</h3>
                            <div className="contact-icon-box">
                                <span><AiOutlineMail /> </span><span>info@gmail.com</span>
                            </div>
                            <div className="contact-icon-box">
                                <span><PiPhoneLight /></span>
                                <span> +91 9852146940</span>
                            </div>
                            <div className="contact-icon-box">
                                <span><CiLocationOn /></span>
                                <span className='office_address'>Office No. 214-216, 10 Biz Park,Near Symbiosis Law College, Airport Road,Vimannagar, Pune- 411014</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div >

        </>
    )
}

export default Contact