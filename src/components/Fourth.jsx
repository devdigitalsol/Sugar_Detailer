import TEXT4 from "../assets/images/text4.png"
import MEN from "../assets/images/men.png"
import MEN2 from "../assets/images/men2.png"
import MEN3 from "../assets/images/men3.png"
import CIRCLE from "../assets/images/circle.png"
import HAND6 from "../assets/images/hand6.png"

export default function Fourth() {
    return(
      <>
        <div className="screen screen-4">
            <div className="box">
            <div className="screen-4-text-1 animated zoomIn d-6">
                <img src={TEXT4} alt="" />
            </div>
            <div className="screen-3-text-2">
                <img src={MEN} alt="" className="men1 animated fadeInUp d-2"/>
                <img src={MEN2} alt="" className="animated fadeInUp d-4"/>
                <img src={MEN3} alt="" className="men3 animated fadeInUp d-6"/>
            </div>
            <div className="screen-4-text-2">
                <img src={CIRCLE} alt="" className=""/>
                <img src={HAND6} alt="" className="hand6 animated fadeInUp d-4"/>
            </div>
            </div>
        </div>
      </>
    )
 }