import React, { useEffect } from "react";
import "./Login.scss";
import { Helmet } from "react-helmet-async";
import RegisterForm from "../../../components/site/Sections/Form/RegisterForm/RegisterForm";
import LoginForm from "../../../components/site/Sections/Form/LoginForm/LoginForm";
import ScrollToTop from "../../../ScrollToTop";

const Login = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (registerBtn && loginBtn && container) {
      const handleRegisterClick = () => {
        container.classList.add("active");
      };

      const handleLoginClick = () => {
        container.classList.remove("active");
      };

      registerBtn.addEventListener("click", handleRegisterClick);
      loginBtn.addEventListener("click", handleLoginClick);

      return () => {
        registerBtn.removeEventListener("click", handleRegisterClick);
        loginBtn.removeEventListener("click", handleLoginClick);
      };
    }
  }, []);

  return (
    <>
    <ScrollToTop/>
    <Helmet>
      <title>Login</title>
    </Helmet>
      <section className="login__hero__section">
      


        <div className="login__hero__section__overlay"></div>
        <div className="login__hero__section__heading container">
          <h1 style={{textAlign:"center"}}>MY <br /> ACCOUNT</h1>
        </div>
      </section>

      <section className="login-page">
      
        <div className="container" id="container">
          <div className="form-container sign-up pt-5 pb-5">
           <RegisterForm />
          </div>
          <div className="form-container sign-in pt-5 pb-5">
          <LoginForm/>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="login">
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button className="hidden" id="register">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
