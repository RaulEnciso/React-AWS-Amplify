import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./login-app";
ReactDOM.render(<App/>, document.getElementById("root"));

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
