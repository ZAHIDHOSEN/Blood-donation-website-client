import React from 'react';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import ContactNumber from '../../Components/ContactNumber';
import ContactForm from '../../Components/ContactForm';
import Statistics from '../../Components/Statistics';
import HowItWork from '../../Components/HowItWork';
import Testimonials from '../../Components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
            <Features></Features>
            <Statistics></Statistics>
            <HowItWork></HowItWork>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <ContactNumber></ContactNumber>
            
            
          
          

            </div>
           

          
            
        </div>
    );
};

export default Home;