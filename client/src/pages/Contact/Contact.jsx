import  React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser' ;
import { FaPhoneAlt,FaEnvelope,FaHome } from 'react-icons/fa';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm( 'service_p61jkff', 'template_5mr8iar', form.current, 'GmHurrEFjtghzlUcf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div id="Contact" >
        <section className='maincontact' > 
            <div className="content">
                <h2>Contact Us</h2>
                <div className="underline"></div>
                <p>Let's get this conversation started. Tell us a bit about yourself, and we'll get in touch as soon as we can.</p>
            </div>
            <div className='maincontainer'>
                <div className="contactInfo">
                    <div className="box">
                        <div  className="icon"> <i><FaHome/></i>
                        </div>
                        <div  className="text">
                            <h3>Address</h3>
                            <p>Theranban <br /> malappuram</p>
                        </div>
                    </div>
                    <div className="box">
                        <div  className="icon"> <i ><FaEnvelope/></i>
                        </div>
                        <div  className="text">
                            <h3>Email</h3>
                            <p>shaheemtshaheemt@gmail.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div  className="icon"> <i><FaPhoneAlt/></i>
                        </div>
                        <div  className="text">
                            <h3>Phone</h3>
                            <p>8606409706</p>
                        </div>
                    </div>
                </div>
                <div className="contactform">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <h2>Send message</h2>
                        <div className="inputbox">
                            <label>Name</label>
                            <input type="text" name="user_name" />
                        </div>
                        <div className="inputbox">
                            <label>Email</label>
                            <input type="email" name="user_emil" />
                        </div>
                        <div className="inputbox">
                            <label>Message</label>
                            <textarea name="message" />
                        </div>
                       <div className="inputbox">
                            <input type="submit" value="Send" />
                       </div>
                    </form>
                </div>
            </div>  
        </section>
    </div> 
  )
}

export default Contact