
import { Collection } from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

export default function App() {
  return (
    <div className=" overflow-hidden">
        <Hero/>
     <ProductSection/>
     <Collection/>
     <Footer/>
    </div>
    
     

  )
}
