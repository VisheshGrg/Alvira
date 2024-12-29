import Button from "../button"

function Hero() {
  return (
    <div className='z-10 h-[90vh] bg-transparent flex justify-center items-center'>
        <div className="w-[50%] h-[100%] flex flex-col items-start justify-center p-20 gap-4">
            <div className="text-small">Black Friday in july</div>
            <div className="text-headingXL font-bold">Up to 50% off</div>
            <div className="text-heading">Hundreds of products available</div>
            <Button>SHOP NOW</Button>
        </div>
        <div className="w-[50%] h-[100%]"></div>
    </div>
  )
}

export default Hero