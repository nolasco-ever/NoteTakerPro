import React from 'react'
import Header from './header'
import Footer from './footer'
import { Form , Button, FloatingLabel} from 'react-bootstrap'

import BusinessMeeting from './images/Business-meeting.png'

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
                    <div className="buttonsContainer">
                        <div className="visualSwitch"><p>Sign Up</p></div>
                
                        <button>Sign Up</button>
                        <button>Login</button>
                    </div>

                    <div className="windowForm">
                    <Form>
                         <Form.Group className="textBox">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group className="textBox">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group className="textBox" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group className="textBox" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="textBox" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
