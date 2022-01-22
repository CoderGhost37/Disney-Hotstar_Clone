import React from 'react'
import './Login.css'

const Login = (props) => {
    return (
        <div className="login">
            <img className="login__bgImage" src="/images/login-background.jpg" alt="" />
            <div className="login__body">
                <div className="login__body-container">
                    <img src="/images/cta-logo-one.svg" alt="" />
                    <button>GET ALL THERE</button>
                    <p>Hotstar is your go-to video streaming app for the best of Indian entertainment, TV shows, LIVE cricket, news and movies. Enjoy unlimited access to your favorite Star India TV shows, LIVE cricket, exclusive Hotstar Specials from India’s best filmmakers and storytellers, blockbuster movies, and LIVE news.</p>
                    <img src="/images/cta-logo-two.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
