import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn)
    {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="f5 link dim white-60 underline pa2 ma1 pointer">Sign out</p>
            </nav>
        )
    }
    else
    {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="f5 link dim white-60 underline pa2 ma1 pointer">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="f5 link dim white-60 underline pa2 ma1 pointer">Register</p>
            </nav>
        )
    }
}

export default Navigation;