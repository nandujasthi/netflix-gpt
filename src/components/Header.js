import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchPage } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    //Toggle GPT Page
    dispatch(toggleGptSearchPage());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full absolute bg-gradient-to-b from-black py-3 z-10 flex justify-between items-center">
      <img src={LOGO} alt="logo" className="w-[180px] " />
      {user && (
        <div className="flex pr-3 items-center">
          {showGptSearch && (
            <select
              className="p-2 bg-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 mx-2 bg-white text-red-500 rounded-md font-bold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-10 rounded-sm"
            src={user?.photoURL}
            alt="User Icon"
          />
          <p className="font-bold text-white ml-2" onClick={handleSignout}>
            (Signout)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
