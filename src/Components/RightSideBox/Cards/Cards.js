import React from "react";
import IdeaIcon from '../../Images/emoji_objects.svg'
import './Cards.css'

export default function Cards({goalProgressPrice,goalAmtPrice,goalDate,HealthIcon,goalHealthType,goalBars,goalTack,goalTrackMonth=""}){
    const handleClick = ()=>{
        window.open('https://www.linkedin.com/in/shubham-rawat01/','_blank')
    }
    return (
        <div id={goalHealthType !== "Weak" && goalHealthType !== "Good" && goalHealthType !== "Excellent!"?"mainCardOfOtherBox":"mainCardBox"}
        onClick={handleClick}>
           
            <div id="planDetailBox">

                <div id="aboutPlanBox">
                    <div id="aboutImg"/>

                    <div id="aboutInsideBox">
                        <div id="aboutTxt">
                            {`Dhairyadev & Sayali’s Vacation  Plan 1`}
                        </div>

                    </div>

                </div>

                <hr id="belowAboutPlan"/>

                <div id="priceDetailsOfPlan">

                    <div id="goalPriceMain">
                        <div id="goalProgressBox">
                            <div id="goalProgressTxt">
                                Goal Progress
                            </div>

                            <div id="goalProgressPrice">
                                {goalProgressPrice}
                            </div>
                        </div>

                        <div id="goalAmountBox">
                            <div id="goalAmtTxt">
                                Goal Amount
                            </div>

                            <div id="goalAmtPrice">
                                {goalAmtPrice}
                            </div>
                        </div>

                    </div>

                    <div id="goalDatesMain">

                        <div id="goalDateBox">
                            <div id="goalDateTxt">
                                Goal Dates
                            </div>

                            <div id="goalDate">
                                {goalDate}
                            </div>
                        </div>

                        <div id="goalHealthBox">

                            <div id="goalHealthTxt">
                                {goalHealthType !== "Weak" && goalHealthType !== "Good" && goalHealthType !== "Poor" && goalHealthType !== "Excellent!" ?
                                    `Goal Reached` :
                                    `Goal Health`}
                            </div>

                            <div id="typeGoalHealthBox">

                                {goalHealthType !== "Weak" && goalHealthType !== "Good" && goalHealthType !== "Poor" && goalHealthType !== "Excellent!"?
                                <></>:
                                <img src={HealthIcon} alt="healthIcon" id="healthIcon"/>}

                                <div id={goalHealthType === "Excellent!"?"excellentHealthTxt":goalHealthType==="Good"?"goodHealthTxt":goalHealthType==="Weak"?"weakHealthTxt":goalHealthType==="Poor"?"poorHealthTxt":"noHealthType"}>
                                    {goalHealthType}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <hr id="lineBelowPlanDeatil"/>

            <div id="planBarBox" style={goalHealthType==='Poor' || HealthIcon===''?{bottom:'24px'}:{}}>

                <img src={goalBars} alt="planBar" id="planBar" />

                <div id="trackAboutPlanTxt">
                    {goalTack}<span id="monthsOfWarnTrack" 
                    style={goalHealthType === "Excellent!"?{color:'rgba(91, 131, 80, 1)'}:goalHealthType==='Weak'?{color:'rgba(217, 158, 22, 1)'}:goalHealthType==='Poor'?{color:'rgba(232, 93, 93, 1)'}:{color:'rgba(59, 77, 128, 1)'}}>
                        {`${goalTrackMonth}${HealthIcon?"":" ahead"}`}</span>
                </div>

            </div>

            {goalHealthType === 'Weak'?
                <>
                    <div id="boostPlanBox">
                        <img src={IdeaIcon} alt="ideaIcon" id="ideaIcon" />
                        <div id="forBoostTxt">
                            <span>Boost</span> to reach your goal sooner!
                        </div>
                    </div>

                    <button id="boostBtn">Boost</button></> :
                <></>}
        </div>
    )
}