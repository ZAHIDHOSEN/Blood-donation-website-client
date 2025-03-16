import React from 'react';
import ContactForm from './ContactForm';
import ContactNumber from './ContactNumber';
import { div } from 'framer-motion/client';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <h3 className='text-4xl font-bold '>Contact Us</h3>

            </div>
            <div className='lg:flex md:flex justify-center items-center  gap-10 py-12'>
            
            <ContactForm></ContactForm>
            <ContactNumber></ContactNumber>
            
        </div>

        </div>
       
    );
};

export default Contact;