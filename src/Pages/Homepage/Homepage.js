import React from 'react'
import CenterContent from './CenterContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import './styles/Homepage.css'
import Navigation from "../../Navigation bar/Navigation"

function Homepage() {
    return (
        <div className="home-container">
            <div className="navpart">
                <Navigation/>
            </div>
            <div className="parts">
                
                <div className="home-left">
                    <LeftContent/>
                </div>

                <div className="home-center">
                    <CenterContent/>
                </div>


                <div className="home-right">
                    <RightContent/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
