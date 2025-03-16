import React from 'react';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import Statistics from '../../Components/Statistics';
import HowItWork from '../../Components/HowItWork';
import Testimonials from '../../Components/Testimonials';
import Contact from '../../Components/Contact';
import Faq from '../../Components/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
            <HowItWork></HowItWork>
            <Features></Features>
            <Statistics></Statistics>
            <Testimonials></Testimonials>
            <Faq></Faq>
            <Contact></Contact>
            
           
            
          
          
            
            
          
          

            </div>
           

          
            
        </div>
    );
};

export default Home;