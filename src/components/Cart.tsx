import React from 'react';

interface CartProps {
  backgroundColor: string;
  imageSrc: string;
  text: string;
  price: string;
  oldPrice?: string; 
}

const Cart: React.FC<CartProps> = ({ backgroundColor, imageSrc, text, price, oldPrice }) => {
  return (
    <div
      className={`flex flex-col items-center rounded-md w-card-xs h-card-sm xs:w-card-sm  sm:w-card-half sm:h-card-md md:w-card-lg-half md:h-card large:w-card large:h-card-lg`}
      style={{ backgroundColor  }} >
      {/* Image Section */}
      <div className="mb-4">
        <img src={imageSrc} alt={text} className="w-full h-full rounded-lg" />
      </div>

      {/* Text and Price Section */}
      <div className="text-center">
        <h6 className=" text-xs font-inter text-white">{text}</h6>
        <div className="flex text-xs font-inter justify-center items-center gap-2">
          <span className="text-xs  font-inter mb-4 text-white">${price}</span>
          {oldPrice && <span className="line-through font-inter text-xs text-white mb-4">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
