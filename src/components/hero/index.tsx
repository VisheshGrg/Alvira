import Hero from "./Hero"
import Navbar from "../navbar"

function Index() {
  return (
    <div>
        <div className="z-[-10] absolute h-[100%] w-[100%] bg-parallax bg-cover bg-fixed">
        </div>
        <div className="bg-transparent"> 
            <Navbar/>
            <Hero/>
        </div>
    </div>
  )
}

export default Index