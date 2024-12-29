
function ProductCard({name,price,image}) {
  return (
    <div className='h-[90vh]'>
        <div className={`w-full h-[75%] flex items-center justify-center ${image} bg-cover overflow-hidden`}/>

        <div className='h-[25%] flex flex-col items-center justify-center font-bold uppercase bg-card'>
            <div className='text-normal'>{name}</div>
            <div className='color-text_gray'>&#8377;{price}</div>
        </div>
    </div>
  )
}

export default ProductCard