
import arrowIcon from "../assets/icons/arrowIcon.svg"
import quote from "../assets/pat-signature.svg"
import bookRed from "../assets/books/BookRed.svg"
import bookWhite from "../assets/books/BookWhite.svg"
import quotes from "../assets/quotes.svg"
import hero from "../assets/hero.png"
export const Collection = () => {
  return (
    <div className="flex flex-col">
        {/* signed book section */}
        <div className="mt-10 md:pb-52 pt-20 flex flex-col md:flex-row large:flex-row bg-primary-300">
            {/* button with text */}
            <div className="ml-2 sm:ml-10">
               <div className="mb-2">
                <h1 className=" font-montserrat text-4xl sm:text-6xl md:text-6xl large:6xl text-white mt-1">Patrick Bet-David's</h1>
                <h1 className=" font-montserrat text-4xl sm:text-6xl md:text-6xl large:6xl h1-gradient mt-1">Signed</h1>
                <h1 className=" font-montserrat text-4xl sm:text-6xl md:text-6xl large:6xl h1-gradient mt-1">Collection</h1>
               </div>
               <div className="flex justify-center items-center bg-white w-40 p-3">
                    <h1>SHOP NOW</h1>
                    <img src={arrowIcon} alt="submit" />      
               </div>        
               <img src={quote} alt="quote" />
            </div>
           {/* book */}
           <div className="flex flex-col sm:flex-row md:flex-row large:flex-row  justify-center items-center">
                <img src={bookRed} alt="red" className="p-5 md:p-0 large:p-0"/>
                <img src={bookWhite} alt="white"  className="pl-10 md:pl-0 large:pl-0"/>
           </div>

        </div>
        {/* quote section */}
        <div className="bg-custome-linear-one  flex relative">
            {/* quote */}
            <div className="p-3 flex-1">
                <img src={quotes} alt="quotes"/> 
                <h1 className="font-montserrat font-extrabold capitalize  sm:pl-3 md:pl-3 large:pl-3 text-xs sm:text-2xl md:text-4xl large:text-4xl text-white">
                Our mission is to enlighten, entertain
                <br/>
                and empower current and future
                <br/>
                leaders around the world.
                </h1>
            </div>
            {/* figure */}
            <div className="sm:pr-3 md:pr-3 large:p-3 absolute  sm:top-[-17%] md:top-[-37%]  large:top-[-37%] right-0 z-10">
              <img src={hero} alt="hero" className="w-[150px] h-[295px] md:w-[300px] md:h-[500px] sm:w-[150px] sm:h-[400px]"/> 
            </div>

        </div>
    </div>
  )
}

{/* <div className="relative p-3 sm:flex-1 md:flex-1 large:flex-1">
<img src={quotes} alt="quotes"/> 
<h1 className="font-montserrat font-extrabold capitalize text-lg sm:text-2xl md:text-4xl large:text-4xl text-white absolute top-[75%] sm:top-[32%] md:top-[32%] left-9">
Our mission is to enlighten, entertain
<br/>
and empower current and future
<br/>
leaders around the world.
</h1>
</div> */}

