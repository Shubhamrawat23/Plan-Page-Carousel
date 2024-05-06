import React from "react";
import './CarouselCard.css'
import useCarousel from '../../../Context/Context.js'

export default function CarouselCard({planIcon,planHeading,subPlanHeading}){

    const {carouselAnimation} = useCarousel();


    const handleCarouselCards = ()=>{
        if (carouselAnimation) {
            window.open('https://www.linkedin.com/in/shubham-rawat01/','_blank')
        }
    }
    return(
        <div id="mainPlannningBox" onClick={handleCarouselCards} style={carouselAnimation?{cursor:'pointer'}:{}}>

            <div id="planningBoxInside">
                <img src={planIcon} alt="planningIcon" id="planIcon" />

                <div id="planHeadingBox">
                    <div id="planHeading">
                        {planHeading}
                    </div>

                    <div id="subPlanHeading">
                        {subPlanHeading}
                    </div>
                </div>
            </div>

        </div>
    )
}