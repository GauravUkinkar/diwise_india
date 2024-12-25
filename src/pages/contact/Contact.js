import React from 'react'
import './Contact.scss';
import { PiPhoneLight } from 'react-icons/pi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail, AiTwotoneMail } from 'react-icons/ai';

function Contact() 
{
    return (

        <>
        <div className="contact-parent parent">
            <div className="contact-container   ">
                <div
                    className="contact-left">
                    <div className="left-cont">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <form className='contact-form'>
                            <input type='text' placeholder='Name' name='name' />

                            <input type='email' placeholder='Email'
                                name='email'
                            />
                            <input type='text' placeholder='Phone' name='phone' />
                            <textarea rows={3}
                                placeholder='Message'>
                            </textarea>
                            <button className='cta'>Submit</button>

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