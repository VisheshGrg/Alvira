import Review from "./review"

function Reviews() {

    const descriptions = [
        "Intelligentsia chambray tousled, kitsch Godard actually pop-up. Listicle ugh flannel tousled roof party. Tofu ethical lumbersexual cray distillery. Freegan cardigan authentic keffiyeh. Roof party keytar tousled.",
    ]

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
        <div className="flex flex-col gap-2 w-full items-center justify-center">
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
            <Review rating={4} description={descriptions[0]} name={"NordicMade"} date = {"August 10, 2015"} img={'bg-user'}/>
        </div>
    </div>
  )
} 

export default Reviews