import { RiStarSFill,RiStarSLine } from "react-icons/ri";

function Ratings({rating}) {
  return (
    <div className="flex gap-0.5">
        {Array(rating).fill(1).map((_el, i) =>
            <RiStarSFill key={i} color="#C19A83" size={20}/>
            )}
        {Array(5-rating).fill(1).map((_el, i) =>
            <RiStarSLine key={i} color="#C19A83" size={20}/>
            )}
    </div>
  )
}

export default Ratings