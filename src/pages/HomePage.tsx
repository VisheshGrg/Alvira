import CategoryCard from '../components/card/CategoryCard'
import ChooseUsCard from '../components/card/ChooseUsCard'
import ProductCard from '../components/card/ProductCard'
import Divider from '../components/divider'
import Index from '../components/hero'
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCreditCard,FaCartArrowDown } from "react-icons/fa6";

function HomePage() {
  return (
    <div>
      <Index/>
      {/* <div className="h-[100vh] bg-background">dfadf</div> */}
      <div className='bg-white'>
        <Divider headingSm="Shop by Category" headingLg="Shop by Category"/>

        <div className='flex justify-center items-center min-h-fit'>
            <div className='w-[80%] grid grid-cols-4 gap-4'>
                <CategoryCard image={'bg-clothes'} category={'clothes'}/>
                <CategoryCard image={'bg-furniture'} category={'furniture'}/>
                <CategoryCard image={'bg-electronics'} category={'electronics'}/>
                <CategoryCard image={'bg-decor'} category={'decor'}/>
            </div>
        </div>

        <Divider headingSm="Featured Products" headingLg="Featured Products"/>

        <div className='flex justify-center items-center min-h-fit'>
            <div className='w-[80%] grid grid-cols-3 gap-5'>
                <ProductCard image={'bg-decor'} name={'lamp'} price={'900.00'}/>
                <ProductCard image={'bg-electronics'} name={'laptop'} price={'120000.00'}/>
                <ProductCard image={'bg-furniture'} name={'sofa'} price={'50000.00'}/>
                <ProductCard image={'bg-iphone'} name={'iphone'} price={'150000.00'}/>
                <ProductCard image={'bg-s24'} name={'s24'} price={'130000.00'}/>
            </div>
        </div>

        <Divider headingSm="Best Products" headingLg="Why Choose Us"/>


        <div className='flex justify-center items-center min-h-fit mb-40'>
            <div className='w-[80%] grid grid-cols-4 gap-5'>
                <ChooseUsCard title={'Fast Delivery'} icon={<FaShippingFast size={40} color='#C19A83'/>}/>
                <ChooseUsCard title={'Free Shipping'} icon={<FaCreditCard size={40} color='#C19A83'/>}/>
                <ChooseUsCard title={'Secure Checkout'} icon={<RiSecurePaymentLine size={40} color='#C19A83'/>}/>
                <ChooseUsCard title={'Easy Returns'} icon={<FaCartArrowDown size={40} color='#C19A83'/>}/>
            </div>
        </div>

        <div className='w-full h-[40vh] bg-card text-text_hover font-bold text-normal flex items-center justify-center'>
          Made with &#10084; by ALVIRA !!
        </div>
      </div>
    
    </div>
  )
}

export default HomePage