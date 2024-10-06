import Cart from "./Cart"
import Header from "./Header"
import cardData from "../json-files/hero.json"



const Hero = () => {
  return (
    <div className=" bg-primary-100 h-full pb-40">
        <div className="relative z-2 p-4">
          <Header />
        </div>
        <div className="mt-[5%] ml-[10%] relative">
            <h1 className="absolute top-0 left-0 w-full  z-0 font-act_of_rejections font-bold hero-typography sm:hero-sm-typography md:hero-md-typography large:hero-typography">
            Future Looks Bright!
            </h1> 
            <div className="relative top-6 sm:top-10 md:top-20 large:top-30 sm:ml-2 md:ml-4 large:ml-6 flex space-x-4 overflow-hidden">
               {cardData.map((item,index)=> (
                  <Cart
                  key={index}
                  backgroundColor= {item.backgroundColor}
                  imageSrc={item.imageSrc}  // Replace with your image path or URL
                  text="Army Green Active Short Sleeve"
                  price="34.95"
                  oldPrice="34.95" // Optional, remove if you don't want to display old price
              />
               ))}
                
            </div>   
        </div> 
        
       
    </div>
  )
}

export default Hero

