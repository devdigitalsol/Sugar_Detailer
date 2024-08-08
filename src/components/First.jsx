import TEXT1 from "../assets/images/text1.png"
import IMG1 from "../assets/images/img1.png"

export default function First() {
   return(
     <>
       <div className="screen screen-1">
            <div className="box">
            <div className="screen-1-text-1 animated zoomIn d-6">
                <img src={TEXT1} alt="" />
            </div>

            <div className="screen-3-text-2" style={{paddingLeft:0}}>
                <img src={IMG1} alt="" className="leader1 animated fadeInUp d-2"/>
            </div>
            
            </div>
        </div>
     </>
   )
}