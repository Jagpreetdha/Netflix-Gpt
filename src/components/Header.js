import { useLocation, useNavigate } from "react-router-dom";
import logo from "../img/Netflix_Logo_PMS.png";
import { auth } from "../utils.js/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appStore from "../utils.js/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils.js/userSlice";
import { toggleBtn } from "../utils.js/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils.js/constants";
import { changeLanguage } from "../utils.js/configSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signed, setSigned] = useState(false);
  const user = useSelector((appStore) => appStore.user);
  const btn = useSelector((appStore) => appStore.gpt?.btn);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/browse") {
      setSigned(true);
    } else {
      setSigned(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubcribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-slate-700 z-10 w-screen flex justify-between">
      <img className="w-44" src={logo} alt="" />
      <div className="flex items-center gap-5">
        {btn && (
          <select
            name=""
            id=""
            className="p-2 bg-gray-900 text-white border-white"
            onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        )}
        {signed && (
          <button
            className="bg-lime-500 rounded-lg text-white px-4 py-2 hover:bg-lime-600 transition-colors"
            onClick={() => dispatch(toggleBtn())}>
            {btn?"Homepage":"GPT Search"}
          </button>
        )}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user-icon"
          className="h-10"
        />
        {signed && (
          <>
            <button className="font-bold text-white" onClick={handleSignOut}>
              Sign Out
            </button>
            <p className="text-white text-lg font-bold uppercase">
              {user?.displayName}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
