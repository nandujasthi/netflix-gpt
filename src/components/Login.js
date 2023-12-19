import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/formvalidations";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const submitForm = () => {
    const validationMessage = formValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationMessage);
  };
  const toggleSigninform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Login Background"
        />
        <div className="w-full absolute top-36 z-10">
          <div className="loginForm block w-3/12 bg-black bg-opacity-70 p-10 rounded mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <h1 className="text-white text-2xl font-bold mb-3">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 my-2 bg-stone-800 bg-opacity-70 rounded w-full text-white placeholder:text-stone-300"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email"
                className="p-3 my-2 bg-stone-800 bg-opacity-70 rounded w-full text-white placeholder:text-stone-300"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-3 my-2 bg-stone-800 rounded w-full text-white placeholder:text-stone-300"
              />
              <p className="text-red-600 font-bold">{errorMessage}</p>
              <button
                type="submit"
                onClick={submitForm}
                className="w-full bg-red-600 rounded text-white p-3 my-2"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p
                className="text-sm text-white cursor-pointer mt-4"
                onClick={toggleSigninform}
              >
                {!isSignInForm
                  ? "Already Registered? Sign In Now"
                  : "New to Netflix? Sign up now."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
