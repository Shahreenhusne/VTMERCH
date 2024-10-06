
import {Link}  from 'react-router-dom'
import logo from "../assets/logo/Valuetainment.svg"
import phone from "../assets/icons/socialnetwork/telephone (2) 1.svg"
import email from "../assets/icons/socialnetwork/email 1.svg"
import facebook from "../assets/icons/socialnetwork/_x30_1._Facebook.svg"
import twitter from "../assets/icons/socialnetwork/_x30_4.Twitter.svg"
import linkedln from "../assets/icons/socialnetwork/linkedin (3).svg"
import group from "../assets/icons/socialnetwork/Group.svg"
import visa1 from "../assets/icons/paymentIcons/visa 1.svg"
import paypal from "../assets/icons/paymentIcons/paypal 1.svg"
import dinerClub from "../assets/icons/paymentIcons/diners-club 1.svg"
import visa2 from "../assets/icons/paymentIcons/visa 2.svg"
import amex from "../assets/icons/paymentIcons/amex 1.svg"
import amexexpress from "../assets/icons/paymentIcons/american-express (1) 1.svg"
import applePay from "../assets/icons/paymentIcons/apple-pay 1.svg"

const Footer = () => {
    return (
      <footer className="bg-secondary-100 text-white p-10">
           {/* logo */}
           <div className='flex gap-2 mt-10 pb-5 border-b-2 border-[#A6A5A380]'>
                <div>
                    <Link to='/'>
                    <img src={logo} className='m-1 w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 large:w-24 large:h-24' style={{ filter: 'invert(18%) sepia(97%) saturate(7470%) hue-rotate(-1deg) brightness(102%) contrast(107%)' }}/>
                    </Link>
                </div>
                <div className=' header-typography xs:xs-typography sm:sm-typography md:md-typography large:large-typography  text-white font-montserrat font-extrabold'>VTMERCH</div>
            </div>
             {/* Subscription */}
         <div className="container mt-10 grid grid-cols-1 sm:grid-cols-4 gap-8 ">
         
          <div className="space-y-4">
            <p>Subscribe and be the first to receive notifications about our upcoming releases and the latest news.</p>
            <div className="flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-white bg-transparent text-center border-2  border-[#A6A5A380]"
              />
              <button className="bg-white text-black mt-5 py-2 w-full rounded-lg">Subscribe</button>
            </div>
          </div>
  
          {/* Customer Services */}
          <div>
            <h3 className="font-bold">Customer Services</h3>
            <ul className="space-y-2 mt-4">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Search</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
            </ul>
          </div>
  
          {/* Products */}
          <div>
            <h3 className="font-bold">Products</h3>
            <ul className="space-y-2 mt-4">
              <li><a href="#" className="hover:underline">Featured products</a></li>
              <li><a href="#" className="hover:underline">Bestseller</a></li>
              <li><a href="#" className="hover:underline">Latest product</a></li>
              <li><a href="#" className="hover:underline">All collections</a></li>
              <li><a href="#" className="hover:underline">All products</a></li>
            </ul>
          </div>
  
          {/* Contact Us */}
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p className="mt-4">Available between 8AM to 6PM. Ready to answer your questions.</p>
            <p className="mt-2 flex"><img src={phone} alt='phone'/> 013456789</p>
            <p className="mt-1 flex"><img src={email} alt='email'/>store@valuetainment.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <img src={facebook} alt='facebook'/>
              </a>
              <a href="#" className="hover:text-gray-400">
              <img src={twitter} alt='twitter'/>
              </a>
              <a href="#" className="hover:text-gray-400">
              <img src={linkedln} alt='linkedln'/>
              </a>
              <a href="#" className="hover:text-gray-400">
              <img src={group} alt='group'/>
              </a>
            </div>
          </div>
        </div>
  
        {/* Footer bottom */}
        <div className="mt-10 flex flex-col sm:flex-row md:flex-row large:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2024 Valuetainment Store. All rights reserved.</p>
                <div className="flex  space-x-2 m-1">
                    <img src={visa1} alt="Visa" className="h-6"/>
                    <img src={applePay} alt="Apple Pay" className="h-6"/>
                    <img src={dinerClub} alt="Diners Club" className="h-6"/>
                    <img src={visa2} alt="Visa" className="h-6"/>
                    <img src={amex} alt="Amex" className="h-6"/>
                    <img src={paypal} alt="Paypal" className="h-6"/>
                    <img src={amexexpress} alt="Discover" className="h-6"/>
                </div>
        </div>

      </footer>
    );
  };
  
  export default Footer;
//   <Link to='/'>
//   <img src={logo} className='m-1 w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 large:w-24 large:h-24 filter invert'/>
//   </Link>
  