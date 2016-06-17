document.addEventListener('DOMContentLoaded', function () {
	
	var logInButton = document.querySelector('.login-button');
	var signUpButton = document.querySelector('.signup-button');
	var buttons = document.querySelector('.buttons');
	var logInButtonLink = document.querySelector('.log-link');
	var signUpButtonLink = document.querySelector('.sign-link');
	var loginUnderline = document.querySelector('.login-underline');
	var signupUnderline = document.querySelector('.signup-underline');
	var logInForm = document.querySelector('.login-form');
	var signUpForm = document.querySelector('.signup-form');

	logInButton.onclick = function(e) {
		e.preventDefault();
		buttons.classList.remove('signup-button-active');
		buttons.classList.add('login-button-active');
		signUpButtonLink.classList.remove('signup-button-active');
		logInButtonLink.classList.add('login-button-active');
		loginUnderline.classList.remove('login-underline-inactive');
		loginUnderline.classList.add('login-underline-active');
		signupUnderline.classList.remove('signup-underline-active');
		signupUnderline.classList.add('signup-underline-inactive');
		signUpForm.classList.remove('show');
		logInForm.classList.add('show');
	}

	signUpButton.onclick = function(e) {
		e.preventDefault();
		buttons.classList.remove('login-button-active');
		buttons.classList.add('signup-button-active');
		logInButtonLink.classList.remove('login-button-active');
		signUpButtonLink.classList.add('signup-button-active');
		signupUnderline.classList.remove('signup-underline-inactive');
		signupUnderline.classList.add('signup-underline-active');
		loginUnderline.classList.remove('login-underline-active');
		loginUnderline.classList.add('login-underline-inactive');
		logInForm.classList.remove('show');
		signUpForm.classList.add('show');
	}
});