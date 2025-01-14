import React from 'react';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import ContactNumber from '../../Components/ContactNumber';
import ContactForm from '../../Components/ContactForm';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Features></Features>
            <ContactNumber></ContactNumber>
            <ContactForm></ContactForm>

          
            
        </div>
    );
};

export default Home;