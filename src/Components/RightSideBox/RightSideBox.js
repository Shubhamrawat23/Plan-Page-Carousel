import React from "react";
import './RightSideBox.css'
import Carousel from "./Carousel/Carousel";
import FilterIcon from '../Images/filter_alt.svg'
import DropArrIcon from '../Images/arrow_drop_down.svg'
import SearchIcon from '../Images/search.svg';
import HeartCheck from '../Images/heart_check.svg'
import ExcellentBar from '../Images/excellentBar.svg'
import GoodBar from '../Images/GoodBar.svg';
import HeartMinus from '../Images/heart_minus.svg'
import WeakBar from '../Images/weakBar.svg';
import HeartBroken from '../Images/heart_broken.svg';
import PoorBar from '../Images/PoorBar.svg';
import ReachedBar from '../Images/ReachedBar.svg';
import LeftArr from '../Images/chevron_left.svg'
import RightArr from '../Images/chevron_right.svg'
import AlertIcon from '../Images/info.svg';
import Cards from "./Cards/Cards";

export default function RightSideBox(){
    return(
        <section id="rtSideMain">
            <div id="frame785">

                <div id="newGoal">
                    <Carousel/>
                </div>


                <div id="calculator">

                    <div id="filterSearchAndSortMainBox">
                        <div id="filterSearchAndSortInsideBox">

                            <div id="trackGoalTxt">
                                Track current goals
                            </div>
                            
                            <div id="frame302">
                                
                                {/*------------------Filter---------------- */}
                                <div id="filterBox">

                                    <div id="filterTxt">
                                        Filters
                                    </div>

                                    <div id="filterIconBox">
                                        <img src={FilterIcon} alt="filter" id="filterIcon"/>
                                    </div>

                                </div>

                                {/*--------------------Sort------------------*/}
                                <div id="sortMainBox">

                                    <div id="sortTxt">Sort by:</div>

                                    <div id="sortingBox">
                                        
                                        <div id="sortingTxt">{`Progress (High to Low)`}</div>

                                        <div id="dropArrBox">
                                            <img src={DropArrIcon} alt="arroIcon" id="dropArrIcon"/>
                                        </div>

                                    </div>
                                </div>

                                {/*----------------------Seacrh----------------- */}
                                <div id="serachBox">
                                        <img src={SearchIcon} alt="searchIcon" id="searchIcon"/>

                                    <input type="text" placeholder="Seacrh" id="serchInput"/>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="alertBox">
                        <img src={AlertIcon} alt="alert" />
                        
                        <span>Tap on a card to view more information</span>
                    </div>

                    <div id="allCardsMainBox">
                        
                        <hr id="lineAboveAllCards"/>


                        {/*---------------------------------Card Plans---------------------------------- */}
                        <div id="allCardsOuterBox">
                            <div id="allCardsInsideBox">
                                <Cards goalProgressPrice={`₹ 11,24,00,000`} 
                                goalAmtPrice={`₹ 15,00,00,000`} 
                                goalDate={`March 2035`} 
                                HealthIcon={HeartCheck} 
                                goalHealthType={`Excellent!`} 
                                goalBars={ExcellentBar}
                                goalTack={`Goal ahead by `}
                                goalTrackMonth={`16 months`}/>
                                
                                <Cards goalProgressPrice={`₹ 2,70,00,000`} 
                                goalAmtPrice={`₹ 5,00,00,000`} 
                                goalDate={`Jan 2040`} 
                                HealthIcon={HeartCheck} 
                                goalHealthType={`Good`} 
                                goalBars={GoodBar}
                                goalTack={`On track`}
                                goalTrackMonth={``}/>

                                <Cards goalProgressPrice={`₹ 42,00,000`} 
                                goalAmtPrice={`₹ 1,00,00,000`} 
                                goalDate={`March 2035`} 
                                HealthIcon={HeartMinus} 
                                goalHealthType={`Weak`} 
                                goalBars={WeakBar}
                                goalTack={`Goal behind by `}
                                goalTrackMonth={`2 months`}/>

                                <Cards goalProgressPrice={`₹ 11,24,00,000`} 
                                goalAmtPrice={`₹ 15,00,00,000`} 
                                goalDate={`March 2035`} 
                                HealthIcon={HeartBroken} 
                                goalHealthType={`Poor`} 
                                goalBars={PoorBar}
                                goalTack={`Goal behind by `}
                                goalTrackMonth={`16 months`}/>

                                <Cards goalProgressPrice={`₹ 11,24,00,000`} 
                                goalAmtPrice={`₹ 15,00,00,000`} 
                                goalDate={`March 2035`} 
                                HealthIcon={``} 
                                goalHealthType={`March 2035`} 
                                goalBars={ReachedBar}
                                goalTack={`Goal reached by `}
                                goalTrackMonth={`16 months`}/>
                            </div>
                        </div>

                    </div>
                    



                    {/*----------------------------Page Numer showing------------------- */}
                    <div id="pageNumBox">
                        <div id="textOfShowingPage">
                            showing <span>1</span>-<span>4</span> of <span>4</span>
                        </div>

                        <div id="ltArrBox">
                            <div id="pageLeftArr">
                                <img src={LeftArr} alt="left" id="leftArrIcon" />
                            </div>
                        </div>

                        <div id="rtArrBox">
                            <div id="pageRightArr">
                                <img src={RightArr} alt="left" id="righttArrIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
