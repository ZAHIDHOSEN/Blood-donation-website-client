import React from 'react';
import { FaPhoneSquare, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactNumber = () => {
    return (
        <div className='space-y-5'>
        <div className='border border-primary h-32 w-64  flex items-center justify-center '>
          <div>
          <p className='flex justify-center'><SiGmail /></p>
        <a className='my-3' href="https://mail.google.com/mail">zahidhosen203@gmail.com</a>
        <p>Send a message</p>
          </div>
        </div>
        <div className='border border-primary  h-32 w-64  flex items-center justify-center '>
          <div>
          <p className='flex justify-center'><FaPhoneSquare /></p>
          <p className='my-3'>8801793397830</p>
        <p>Send a message</p>
          </div>
        </div>
        <div className='border border-primary  h-32 w-64  flex items-center justify-center '>
          <div>
          <p className='flex justify-center'><FaWhatsapp /></p>
          
        <p>Send a message</p>
          </div>
        </div>
   
  </div>
    );
};

export default ContactNumber;