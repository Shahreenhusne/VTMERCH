import React from 'react';

interface CartProps {
  backgroundColor: string;
  imageSrc: string;
  text: string;
  price: string;
  oldPrice?: string; 
}

const ProductCart: React.FC<CartProps> = ({ backgroundColor, imageSrc, text, price, oldPrice }) => {
  return (
    <div
      className={`flex flex-col items-center rounded-md  w-card-sm h-card-sm sm:w-card-lg-half sm:h-card-half  md:w-card-md md:h-card-md large:w-card large:h-card-lg`}
      style={{ backgroundColor  }} >
      {/* Image Section */}
      <div className="p-2 md:p-4">
        <img src={imageSrc} alt={text} className="w-full h-full rounded-lg" />
      </div>

      {/* Text and Price Section */}
      <div className="text-center">
        <h6 className=" text-xs font-inter text-black">{text}</h6>
        <div className="flex text-xs font-inter justify-center items-center gap-2">
          <span className="text-xs  font-inter mb-4 text-black">${price}</span>
          {oldPrice && <span className="line-through font-inter text-xs text-black mb-4">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
