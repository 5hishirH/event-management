import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const LogOutHandler = () => {
    logOut()
      .then(() => swal("Logout Successfull!", "", "success"))
      .catch((error) => console.log.error(error));
  };
  return (
    <div className="w-full shadow-lg flex justify-between items-center py-6 px-4">
      <div className="text-3xl font-bold">EventElegancce</div>
      <nav className="text-lg font-medium flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-purple-700 font-bold underline"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-purple-700 font-bold underline"
              : ""
          }
        >
          Review
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-purple-700 font-bold underline"
              : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-purple-700 font-bold underline"
              : ""
          }
        >
          Register
        </NavLink>
        <div className="flex gap-4 justify-center items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={LogOutHandler}
                className="text-white px-3 py-1 rounded bg-orange-500"
              >
                Sign Out
              </button>
              <span>{user.email.slice(0, user.email.indexOf("@"))}</span>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-purple-700 font-bold underline"
                  : ""
              }
            >
              Login
            </NavLink>
          )}
          {user?.photoURL ? (
            <div className="h-8 rounded-full overflow-hidden">
              <img src={user.photoURL} alt="" className="h-full" />
            </div>
          ) : (
            <div className="h-8 rounded-full overflow-hidden">
              <img src="" alt="" className="h-full" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
