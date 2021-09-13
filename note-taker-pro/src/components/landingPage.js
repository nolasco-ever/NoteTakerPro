import React from 'react'
import Header from './header'
import Footer from './footer'

import BusinessMeeting from './images/business-meeting.png'

export default function LandingPage() {
    return (
        <div className="App">
            <Header/>
            
            <div className="landingPageContainer">
                <div className="graphicsContainer">
                    <div>
                        <img src={BusinessMeeting}/>
                        <p>A workspace just for you... sign up for free!</p>
                    </div>
                </div>

                <div className="pageFormsContainer">
                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}
