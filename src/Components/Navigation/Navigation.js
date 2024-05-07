import React from "react";
import Logo from '../Images/Logo.svg'
import NotificationIcon from '../Images/notifications.svg'
import UserAvatar from '../Images/memoji.svg'
import More from '../Images/more_vert.svg'
import HomeIcon from '../Images/home.svg'
import TrackIcon from '../Images/track_changes.svg'
import BubbleChartIcon from '../Images/bubble_chart.svg'
import InvestmentIcon from '../Images/real_estate_agent.svg'
import IpoIcon from '../Images/add_business.svg'
import AdminPanelIcon from '../Images/admin_panel_settings.svg'
import FilterIcon from '../Images/tune.svg'
import collapseIcon from '../Images/collapse_content.svg'
import MenuBar from '../Images/menu.svg'
import AccountDummy from '../Images/account_circle.svg'
import GoalLeftIconArr from '../Images/GoalLeftIcon.svg'
import './Navigation.css'

export default function Navigation(){
    return(
        <section id="navMain">
            <div id="navInsideBox">

                {/*-------------------Logo----------------- */}
                <div id="LogoBox">
                    <img src={MenuBar} alt="menu" id="menuBar"/>
                    <img src={Logo} alt="logo" id="logo"/>

                    <div id="notificationAndAccBox">
                        <div id="notificationInside">
                            <img src={NotificationIcon} alt="notificationBell" id="notificationIcon"/>
                        </div>

                        <img src={AccountDummy} alt="account" id="accountDummyIcon"/>
                    </div>
                </div>

                {/*--------------User DashBoard--------------- */}
                <div id="dashboardMain">

                    {/*---------Profile-------- */}
                    <div id="profileMainBox">
                        <div id="userAvatarAndDetails">

                            <img src={UserAvatar} alt="Avatar" id="avatarImg" />

                            <div id="userDetails">
                                <div id="userName">Dhruv S.</div>
                                <div id="userEmail">dhruv@fabits.com</div>
                            </div>
                        </div>
                        <div id="moreDetailBox">
                            <img src={More} alt="more" id="moreDeatilIcon"/>
                        </div>
                    </div>

                    {/*---------User Navigation--------*/}
                    <div id="userNavigationMain">

                        {/*-----------Home-------- */}
                        <div id="tabsHome">
                            <div id="homeTabInsideBox">
                                <div id="homeTabIcon">
                                    <img src={HomeIcon} alt="homeIcon" id="homeIcon"/>
                                </div>
                                <span id="homeText">Home</span>
                            </div>
                        </div>  

                        {/*------------------Finance------------------ */}
                        <div id="financeTab">
                            <div id="financeText">FINANCE</div>

                            {/*-----Plan Goal Tab----- */}
                            <div id="goalTab">
                                <div id="goalTabInsideBox">
                                    <div id="trackBox">
                                        <img src={TrackIcon} alt="track" id="trackIcon"/>
                                    </div>

                                    <img src={GoalLeftIconArr} alt="left" id="goalLtIcon"/>
                                    
                                    <span id="goalText">Plan a Goal</span>
                                </div>
                            </div>

                            {/*--------top Funds Tab------- */}
                            <div id="fundsTab">
                                <div id="fundsTabInsideBox">
                                    <div id="bubbleBox">
                                        <img src={BubbleChartIcon} alt="fundsIcon" id="bubbleIcon"/>
                                    </div>
                                    <span id="fundsText">Discover Top Funds</span>
                                </div>
                            </div>

                            {/*--------user investments tab------- */}
                            <div id="investmentTab">
                                <div id="investmentTabInsideBox">
                                    <div id="investIconBox">
                                        <img src={InvestmentIcon} alt="investIcon" id="investIcon"/>
                                    </div>
                                    <span id="investText">My Investments</span>
                                </div>
                            </div>

                            {/*---------------IPOs-------------- */}
                            <div id="ipoTab">
                                <div id="ipoTabInsideBox">
                                    <div id="ipoIcon">
                                        <img src={IpoIcon} alt="IpoIcon" id="ipoIcon"/>
                                    </div>
                                    <span id="ipoText">IPO</span>
                                </div>
                            </div>
                        </div>

                        {/*--------------------INSURANCE-------------------- */}
                        <div id="insuranceTab">
                            <div id="insuranceText">INSURANCE</div>
                            
                            {/*------------Insurance -------- */}
                            <div id="insuranceAdminTab">
                                <div id="insuranceAdminTabInsideBox">
                                    <div id="adminIconBox">
                                        <img src={AdminPanelIcon} alt="adminPanelIcon" id="adminIcon"/>
                                    </div>
                                    <span id="insuranceAdminText">Insurance</span>
                                </div>
                            </div>

                            {/*----------Insurance filter------------ */}
                            <div id="insuranceFilterTab">
                                <div id="insuranceFilterTabInsideBox">
                                    <div id="insurancefilterIconBox">
                                        <img src={FilterIcon} alt="filterIcon" id="insurancefilterIcon"/>
                                    </div>
                                    <span id="filterInsuranceText">Insurance</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="collapseMain">
                <div id="collapseBox">
                    <img src={collapseIcon} alt="collapseIcon" id="collapseIcon"/>
                </div>
            </div>
        </section>
    )
}