
import Ratings from "./ratings";
import User from "./user";


function Review({name,date,rating,description,img}) {
  return (
    <div className="flex flex-col gap-1 w-[70%]">
        <div className="flex justify-between items-center  w-full px-10">
            <User img={img} date={date} name={name}/>
            <Ratings rating={3}/>
        </div>
        <div className="flex items-start justify-start px-32 text-gray-600 font-medium ">
          Authentic keffiyeh master cleanse fingerstache. Deep v single-origin coffee cred Thundercats beard.
        </div>

        <hr className="w-full h-[1px] text-black bg-gray-300 mt-4"/>
    </div>
  )
}

export default Review