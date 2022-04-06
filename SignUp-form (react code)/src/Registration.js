import React from 'react'

 const Registration = () => {
  return (
    <><div className="container" id="container">
    <div className="form-container log-in-container">
        <form action="#">
            <h2>Sign Up</h2>
            <br/>
            <input type="text" placeholder="Enter your Fullname" />
            
            <input type="email" placeholder="Enter your Email" />
            <input type="text" placeholder="Enter your Contact Number" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Re-enter Password" /><br/>
            
            
<br/>
            <button id="sign-in">Sign Up</button>
        </form>
    </div>
    <div className="overlay-container">
        <div className="overlay">
            <div className="overlay-panel overlay-right">
                <img src="" alt="TTN Logo"> </img>
                <h4>Enter your details and Start <br/>
                    your journey with us</h4>
                <p className="dont">Don't Stop until you are proud</p><br/>
                     
            </div>
        </div>
    </div>
</div>
    </>
  )
}
export default Registration;
