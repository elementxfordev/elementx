import React from 'react'
import './../Css/Login.css';
const Login = () => {
  return (
    <div className='background'>
      <div class="form-container">
	<p class="title">Login</p>
	<div class="form">
		<div class="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="" />
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" />
			<div class="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button class="sign">Sign in</button>
	</div>
	<div class="social-message">
		<div class="line"></div>
	</div>
	<div class="social-icons">
	</div>
	<p class="signup">Don't have an account?&nbsp;&nbsp;
		<a rel="noopener noreferrer" href="#" class="">Sign up</a>
	</p>
</div>
    </div>
  )
}

export default Login
