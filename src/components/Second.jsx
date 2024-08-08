import TEXT2 from "../assets/images/text2.png"
import LEADERS1 from "../assets/images/leader1.png"
import LEADERS2 from "../assets/images/leader2.png"
import LEADERS3 from "../assets/images/leader3.png"
import LEADERS4 from "../assets/images/leader4.png"
import LEADERS5 from "../assets/images/leader5.png"


export default function Second() {
    return(
      <>
        <div className="screen screen-2">
            <div className="box">
            <div className="screen-2-text-1 animated zoomIn d-6">
                <img src={TEXT2} alt="" />
            </div>
            <div className="screen-3-text-2" style={{paddingLeft:0}}>
                <img src={LEADERS1} alt="" className="leader1 animated fadeInUp d-2"/>
                <img src={LEADERS2} alt="" className="leader2 animated fadeInUp d-4"/>
                <img src={LEADERS3} alt="" className="leader3 animated fadeInUp d-6"/>
                <img src={LEADERS4} alt="" className="leader4 animated fadeInUp d-8"/>
                <img src={LEADERS5} alt="" className="leader5 animated fadeInUp d-10"/>
            </div>
            </div>
        </div>
      </>
    )
 }