import React, { useRef } from "react";
import'./Carousel.css'
import useCarousel from '../../Context/Context.js'
import CarouselCard from "./CarouselCard/CarouselCard";
import RetirementIcon from '../../Images/RetirementIcon.svg'
import EmergencyIcon from '../../Images/Group 99.svg'
import WeddingIcon from '../../Images/WeddingIcon.svg'
import VacationIcon from '../../Images/VaccationIcon.svg'
import EducationIcon from '../../Images/EducationIcon.svg'
import AddNotesIcon from '../../Images/note_stack_add.svg'
import CarouselRtIcon from '../../Images/carouselRightIcon.svg'

export default function Carousel(){
    const {carouselAnimation,setCarouselAnimation} = useCarousel()
    const carouselRef = useRef()
    let count = 1

    const handleCarouselAnimation = ()=>{
        if (carouselAnimation &count<6) {
            carouselRef.current.scrollTo({left:350*count,behavior:'smooth'});
            count++;
        }
        else{setCarouselAnimation(true)}
    }

    const handleCarouselAnimationOff = ()=>{
        if(carouselAnimation && count>=2){
            carouselRef.current.scrollTo({left:350*(count-2),behavior:'smooth'});
            count--;
        }
        else if(count===1){
            setCarouselAnimation(false)
        }    
    }
    return(
        <>
            <div id={carouselAnimation?"activePlanQuesBox":"planQuesBox"}>

                <div id="goalQues">
                    What financial goal do you want to plan today?
                </div>

                <div id="startPlanningText">
                    Select a goal to start planning
                </div>

            </div>

            <div id={carouselAnimation ? "blurLtRect" : ""}></div>

            <div id={carouselAnimation ? "carouselLtIconBox" : ""} onClick={handleCarouselAnimationOff}>
                <img src={CarouselRtIcon} alt="ltIcon" id="carouselLtIcon" style={carouselAnimation?{display:'block'}:{display:'none'}} />
            </div>

            <div id={carouselAnimation ? "carouselActive" : "allCardsBox"}
                onClick={handleCarouselAnimation}
                ref={carouselRef}>

                <CarouselCard planIcon={RetirementIcon} planHeading={`Retirement`} subPlanHeading={`Your old age, taken care of`}/>
                <CarouselCard planIcon={EmergencyIcon} planHeading={`Emergency`} subPlanHeading={`Be prepared at all times`}/>
                <CarouselCard planIcon={WeddingIcon} planHeading={`Wedding`} subPlanHeading={`Plan your dream wedding today`}/>
                <CarouselCard planIcon={VacationIcon} planHeading={`Vacation`} subPlanHeading={`Never too late for the Bahamas!`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education1`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education2`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education3`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education4`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education5`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education6`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education7`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education8`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education9`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education10`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education11`} subPlanHeading={`Build your career, tension-free`} />
                <CarouselCard planIcon={EducationIcon} planHeading={`Education12`} subPlanHeading={`Build your career, tension-free`} />

            </div>
            <div id="blurRtRect"></div>

            <div id="carouselRtIconBox" onClick={handleCarouselAnimation}>
                <img src={CarouselRtIcon} alt="rtIcon" id="carouselrtIcon" />
            </div>

            <img src={AddNotesIcon} alt="addNotesIcon" id={carouselAnimation?"activeImgNotes":"addNotesImg"} />
        </>
    )
}