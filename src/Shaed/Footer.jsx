import { Link } from 'react-router-dom';
import image from '../assets/footer.webp'

const Footer = () => {
  
    return (
        <footer className="footer bg-primary text-base-content p-10">
        <aside>
        
          <img className='h-28 w-36 rounded-xl' src={image} alt="" />
          <p className='text-gray-100'>
            Blood Donation Website
            <br />
            since 2025 in bangladesh
          </p>
        </aside>
        <nav className='text-gray-100'>
          <h6 className="footer-title text-black font-bold text-xl">Pages</h6>
           <li><Link to={`/`}>Home</Link></li>
           <li><Link to={`/blog`}>Blogs</Link></li>
           <li><Link to={`/donationRequests`}>Donation</Link></li>
           <li><Link to={`/dashboard`}>Dashboard</Link></li>
        </nav>
        <nav className='text-gray-100'>
          <h6 className="footer-title text-black font-bold text-xl">Contact Us</h6>
          <li><a href="https://mail.google.com/mail">zahidhosen203@gmail.com</a></li>
          <li><a href="linkedin.com/in/zahid-hosen-8164392bb">Linkedin</a></li>
          <li>8801793397830</li>
          <li>Whats Up</li>
        </nav>
        <nav className='text-gray-100'>
          <h6 className="footer-title text-black font-bold text-xl">About Us</h6>
          <li>🩸 10,000+ Blood Donors</li>
          <li>❤️ 25,000+ Lives Saved</li>
          <li>🏥 500+ Hospitals Supported</li>
        </nav>
      </footer>
    );
};

export default Footer;