import TEXT3 from "../assets/images/text3.png"
import HAND1 from "../assets/images/hand1.png"
import HAND2 from "../assets/images/hand2.png"
import HAND3 from "../assets/images/hand3.png"
import HAND4 from "../assets/images/hand4.png"
import HAND5 from "../assets/images/hand5.png"

export default function Third() {
    return(
      <>
       <div className="screen screen-3">
            <div className="box">
                <div className="screen-3-text-1 animated zoomIn d-4">
                    <img src={TEXT3} alt="" />
                </div>

            <div className="screen-3-text-2">
                <img src={HAND1} alt="" className="animated fadeInUp d-2"/>
                <img src={HAND2} alt="" className="animated fadeInUp d-4"/>
                <img src={HAND3} alt="" className="animated fadeInUp d-6"/>
                <img src={HAND4} alt="" className="animated fadeInUp d-8"/>
                <img src={HAND5} alt="" className="animated fadeInUp d-10"/>
            </div>
            </div>
             {/* <div className="ani-wrap">
                <div className="img-wrap">
                    <img className="absolute" src="assets/images/flag.png" alt=""/>
                </div>
            </div>  */}
        </div>
      </>
    )
 }