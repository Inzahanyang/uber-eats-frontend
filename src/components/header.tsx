import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import uberlogo from "../images/logo.svg";

export const Header: React.FC = () => {
  const { data } = useMe();
  return (
    <>
      {!data?.me.verified && (
        <div className=" bg-red-500 p-3 text-center text-base text-white ">
          <span>Please verify your email.</span>
        </div>
      )}
      <header className="py-6">
        <div className="w-full px-5 xl:px-0 max-w-screen-lg  mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={uberlogo} alt="logo" className="w-44" />
          </Link>
          <span className="text-xs">
            <Link to="/edit-profile">
              <FontAwesomeIcon icon={faUser} className="text-3xl" />
            </Link>
          </span>
        </div>
      </header>
    </>
  );
};
