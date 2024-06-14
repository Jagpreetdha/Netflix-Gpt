import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils.js/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils.js/firebase";

function Login() {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleSignInForm() {
    setIsSignForm(!isSignInForm);
  }
  function handleButtonClick() {
    //Validate The form
    const value = checkValidData(email.current.value, password.current.value);
    setErrorMessage(value);

    if (value) return;

    //Sign in/Sign Up
    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + errorCode);
        });
    }
  }
  return (
    <div className="">
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
          className="h-screen w-screen  bg-gradient-to-b from-black"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute 3/12 top-1/2 left-1/2 -translate-x-44 -translate-y-40 flex flex-col bg-black text-white py-8 px-8 w-[380px] opacity-90">
        <h1 className="font-bold text-3xl p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 mt-4 mb-4 bg-gray-700"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 mt-4 mb-4 bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 m-2 bg-gray-700 mb-4"
        />
        <p className="text-red-700 p-2 px-8 font-bold ">{errorMessage}</p>
        <button
          className="py-3 px-2 m-2 mt-2 bg-red-700 rounded-lg mb-4"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        {isSignInForm ? (
          <p className="m-2 px-1">
            New to Netflix? &nbsp;
            <span
              onClick={toggleSignInForm}
              className="border-b border-white cursor-pointer">
              {" "}
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="m-2 px-1">
            Already a user &nbsp;
            <span
              onClick={toggleSignInForm}
              className="border-b border-white cursor-pointer">
              {" "}
              Sign In Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
