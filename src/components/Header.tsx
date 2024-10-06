
import {Link}  from 'react-router-dom'
import logo from "../assets/logo/Valuetainment.svg"
import hamburger_logo from "../assets/logo/hamburger-button.svg"

const Header = () => {
  return (
    <div className='flex  justify-between items-center pl-[5%] pr-[5%]'>
      <div className='flex gap-2'>
      <div>
          <Link to='/'><img src={logo} className='m-1 w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 large:w-24 large:h-24 filter invert'/></Link>
      </div>
      <div className=' header-typography xs:xs-typography sm:sm-typography md:md-typography large:large-typography  text-white font-montserrat font-extrabold'>VTMERCH</div>
      </div>
      <div>
      <Link to='/'><img src={hamburger_logo} className='w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-18 md:h-18 large:w-22 large:h-22 '/></Link>
      </div>
    </div>
  )
}

export default Header