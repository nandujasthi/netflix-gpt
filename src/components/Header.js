import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="w-full absolute bg-gradient-to-b from-black py-3 z-10 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-[180px] "
      />
      {user && (
        <div className="flex pr-3 items-center">
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
