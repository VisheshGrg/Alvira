import { useState } from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import Navbar from '../components/navbar';
import Lottie from "lottie-react";
import animation from "../../public/chatbotAnimation.json";
import { GiCancel } from 'react-icons/gi';
import ChatBot from '../components/chatbot';
import Divider from '../components/divider';
import Reviews from '../components/reviews';
import CategoryCard from '../components/card/CategoryCard';

function ProductPage() {

  const [selectedImage, setSelectedImage] = useState('https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-c.jpg');
  const [selectedDot, setSelectedDot] = useState('red');
  const [quantity,setQuantity] = useState(1);
  const [isDialogueOpen, setDialogueOpen] = useState(false);

  const handleImageChange = (newImage: string,dotColor: string) => {
    setSelectedImage(newImage);
    setSelectedDot(dotColor);
  };

  const increment = () => {
    setQuantity(quantity+1);
  }

  const decrement = () => {
    if(quantity>1){
        setQuantity(quantity-1);
    }
  }

  const handleOpen = () => {
    setDialogueOpen(!isDialogueOpen);
  }

    return (
        <div>
            <Navbar/>
            <div className='relative'>
                <div className='fixed bottom-6 right-6 cursor-pointer z-20'>
                    <Lottie animationData={animation} loop={true} className={`w-[200px] h-[200px] mr-2 ml-2 ${isDialogueOpen ? 'hidden':''} duration-700`} onClick={handleOpen}/>
                    <div className={`h-[80vh] w-[25vw] bg-slate-300 rounded-xl ${!isDialogueOpen ? 'hidden':''} relative duration-700 shadow-xl`}>
                        <div className='absolute top-4 right-4 cursor-pointer'>
                            <div onClick={() => setDialogueOpen(false)}><GiCancel size={20} color='black'/></div>
                        </div>
                        <div className='absolute top-4 left-4 cursor-pointer'>
                            <div onClick={() => setDialogueOpen(false)}><span className='font-bold text-[#212529]'>AL<span className='text-gray-600'>VI</span>RA AI</span></div>
                        </div>
                        <ChatBot/>
                    </div>
                </div>
                <div className="bg-transparent py-10 px-5 flex flex-col items-center justify-center gap-6 w-full">
                    <div className="flex flex-row justify-center items-stretch min-h-[600px] w-full">
                        <div className="px-8 py-2 w-[50%] flex flex-col justify-between gap-4">
                            <div className="h-[60%]">
                                <img
                                className="h-full w-full object-cover"
                                src={selectedImage}
                                alt="Product Image"
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center h-[40%] gap-4 w-full">
                                <div className="w-[50%] h-full">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-b-246x300.jpg"
                                        alt="Product Thumbnail 1"
                                        onClick={() => handleImageChange('https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-b-246x300.jpg','')}
                                    />
                                </div>
                                <div className="w-[50%] h-full">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-a-246x300.jpg"
                                        alt="Product Thumbnail 2"
                                        onClick={() => handleImageChange('https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-a-246x300.jpg','')}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-8 py-2 w-[50%] flex flex-col justify-start items-start h-full text-md text-text_gray">
                            <p className="mb-2">Home / Living / Product Name 3</p>
                            <p>Decor. Living Room</p>
                            <div className="flex flex-col justify-center items-start p-0 my-4 gap-2">
                                <p className="text-2xl text-black mb-2">Product Name 3</p>
                                <p><span className="text-2xl font-bold text-text_hover">$85.00 - $99.00</span> & Free Shipping</p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper metus imperdiet. Vivamus id justo dui.
                                </p>
                                <p>Donec faucibus gravida vulputate. Sed quis porttitor libero. Aenean posuere imperdiet elit, in aliquet lorem vulputate sed. Integer et lacinia tellus.</p>
                            <div />
                            <div className="flex gap-2 my-4">
                                <div
                                    className={`w-4 h-4 rounded-full bg-red-500 cursor-pointer ${selectedDot=='red' ? 'border-2 border-black' : 'border-2 border-transparent'}`}
                                    onClick={() => handleImageChange('https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-c.jpg','red')}
                                    title="Red"
                                />
                                <div
                                    className={`w-4 h-4 rounded-full bg-blue-500 cursor-pointer ${selectedDot=='blue' ? 'border-2 border-black' : 'border-2 border-transparent'}`}
                                    onClick={() => handleImageChange('https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-b-246x300.jpg','blue')}
                                    title="Blue"
                                />
                                <div
                                    className={`w-4 h-4 rounded-full bg-green-500 cursor-pointer ${selectedDot=='green' ? 'border-2 border-black' : 'border-2 border-transparent'}`}
                                    onClick={() => handleImageChange('https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-a-246x300.jpg','green')}
                                    title="Green"
                                />
                                </div>
                            </div>

                            <hr className="border-t-1 border-gray-300 my-2 w-full" />

                            <div className='flex flex-row gap-5'>
                                <div className='flex items-center'>
                                    <button onClick={decrement} className='px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400'>-</button>
                                    <span className='px-4 py-2 border-t border-b border-gray-200 text-gray-700'>{quantity}</span>
                                    <button onClick={increment} className='px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400'>+</button>
                                </div>
                                <div>
                                    <button className='px-4 py-2 bg-gray-500 text-gray-200 hover:bg-gray-400'>Add to Cart</button>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 my-5'>
                                <p className='font-bold'>Free shipping on orders over $50!</p>
                                <p className='flex'><span className='m-1'><IoIosCheckmarkCircle /></span>No-Risk Money Back Guarantee!</p>
                                <p className='flex'><span className='m-1'><IoIosCheckmarkCircle /></span>No Hassle Refunds</p>
                                <p className='flex'><span className='m-1'><IoIosCheckmarkCircle /></span>Secure Payments</p>
                            </div>

                            <div className='my-2 flex flex-col gap-4'>
                                <p className='text-2xl font-bold text-text_hover mb-2'>Description</p>

                                <div className='flex flex-row justify-center items-center h-auto bg-gray-100 rounded-lg'>
                                    <div className='w-[70%] flex flex-col items-start justify-between gap-2 p-2'>
                                        <p className='text-xl font-bold text-black'>Features</p>
                                        <hr className="border-t-1 border-text_hover my-2 w-20" />
                                        <p>Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim. Suspendisse in ultrices massa.</p>
                                        <ul className='text-text_hover font-bold'>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Etiam eu tortor tempor, malesuada</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Nunc vitae erat sit amet neque varius consequat</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                    </div>
                                    <div className='w-[30%] p-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7xWyiDsE-dWpduLtsrqV0i_k8-BSOYGrng&s" className=''></img>
                                    </div>
                                </div>

                                <div className='flex flex-row justify-center items-center h-auto bg-gray-100 rounded-lg'>
                                    <div className='w-[30%] p-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthGHaCLH09IfRxaJr2qlrXxCGxW-iCryaRw&s" className=''></img>
                                    </div>
                                    <div className='w-[70%] flex flex-col items-end justify-between gap-2 p-2'>
                                        <p className='text-xl font-bold text-black'>Care Instructions</p>
                                        <hr className="border-t-1 border-text_hover my-2 w-20" />
                                        <ul className='flex flex-col items-end'>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Etiam eu tortor tempor, malesuada</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Nunc vitae erat sit amet neque varius consequat</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Vivamus lobortis posuere ante</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Morbi nisi diam, cursus non ultricies non</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                        <p className='text-right text-text_hover font-bold'><span>Note: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>

                                <div className='flex flex-row justify-center items-center h-auto bg-gray-100 rounded-lg'>
                                    <div className='w-[70%] flex flex-col items-start justify-between gap-2 p-2'>
                                        <p className='text-xl font-bold text-black'>Warranty</p>
                                        <hr className="border-t-1 border-text_hover my-2 w-20" />
                                        <p>
                                            In ex nisi, viverra in condimentum in, volutpat vel quam maximus
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed blandit eu.</p>
                                        <ul className='text-text_hover font-bold'>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Etiam eu tortor tempor, malesuada</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Nunc vitae erat sit amet neque varius consequat</li>
                                            <li className='flex'><span className='mr-1 mt-1'><IoIosCheckmark /></span>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                    </div>
                                    <div className='w-[30%] p-5'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7xWyiDsE-dWpduLtsrqV0i_k8-BSOYGrng&s" className=''></img>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-5 items-center justify-center w-full'>
                        <Divider headingSm="You may like" headingLg="Ratings and Reviews"/>

                        <Reviews/>

                    </div>

                    <div className='flex flex-col items-center justify-center gap-4 w-full'>
                        <Divider headingSm="You may like" headingLg="Related Products"/>

                        <div className='flex justify-center items-center min-h-fit w-full'>
                            <div className='w-[80%] grid grid-cols-5 gap-5'>
                                <CategoryCard image={'bg-decor'} category={'900.00'} />
                                <CategoryCard image={'bg-electronics'} category={'120000.00'} />
                                <CategoryCard image={'bg-furniture'} category={'50000.00'} />
                                <CategoryCard image={'bg-furniture'} category={'50000.00'} />
                                <CategoryCard image={'bg-furniture'} category={'50000.00'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductPage;
