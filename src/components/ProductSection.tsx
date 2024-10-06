import cardData from "../json-files/product.json"

import ProductCart from "./ProductCard"
const ProductSection = () => {
  return (
    <div className="mt-10 ml-[5%] sm:ml-[10%] md:ml-[10%] large:ml-[10%]">
        {/* text */}
        <div>
           <h1 className=" font-montserrat font-extrabold text-black text-2xl sm:text-4xl md:text-6xl">Buy 1 GET 1 FREE</h1>
           <h1 className=" font-montserrat text-black text-2xl sm:text-4xl md:text-6xl  m-1 font-extrabold">ON <span className="text-white text-stroke font-bold">BEST SELLING PRODUCTS</span></h1>
        </div>
        {/* cart */}
        <div className="flex m-2 justify-center items-center space-x-4 w-[90%] mt-[5%] overflow-x-hidden">
               {cardData.map((item,index)=> (
                  <ProductCart
                  key={index}
                  backgroundColor= {item.backgroundColor}
                  imageSrc={item.imageSrc} // Replace with your image path or URL
                  text="Army Green Active Short Sleeve"
                  price="34.95"
                  oldPrice="34.95" // Optional, remove if you don't want to display old price
              />
               ))}     
        </div>
       
    </div>
  )
}

export default ProductSection