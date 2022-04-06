import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container" id="container">
		<div className="form-container log-in-container">
			<form action="#">
				<h2>Login to Your Account</h2>
				<br/>
				
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" /><br/>
				<section className="subs"><div class="remember">
						<label><input type="checkbox" name=""/>Remember Me</label>
				</div><div class="forgot">
				<a href="#">Forgot your password?</a></div>
                </section>
                          <br/>
				<button id="sign-in">Sign In</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<img src="" alt="TTN Logo"> </img>
					<h4>Enter your details and Start <br/>
                        your journey with us</h4>
					<p class="dont">Don't Stop until you are proud</p><br/>
                        <button>Sign Up</button>  
				</div>
			</div>
		</div>
	</div>
    </>
  )
}
export default Login;
