import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/Images/user.png";
import "./navbar.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlassmorphismButton from "../PrimaryButton/GlassmorphismBtn/GlassmorphismBtn";

const Nav = () => {
  const loading = false;
  const user = false;
  const navlinks = (
    <>
      <li className="flex">
        {" "}
        <NavLink
          to="/"
          className={`   
          flex items-center px-4 rounded-none pt-4 uppercase text-base text-[#3a3a3a] duration-75  `}
        >
          Home
        </NavLink>
      </li>

      <li className="flex">
        {" "}
        <NavLink
          to="/allFoods"
          className={` 
          flex items-center px-4 rounded-none pt-4 uppercase text-base text-[#3a3a3a] duration-75  `}
        >
          All Foods
        </NavLink>
      </li>

      <li className="flex">
        {" "}
        <NavLink
          to="/gallery"
          className={` ${({ isActive }) => {
            console.log(isActive);
          }}flex items-center px-4 rounded-none duration-75 pt-4 uppercase text-base text-[#3a3a3a] `}
        >
          Gallery
        </NavLink>
      </li>
    </>
  );

  //   const handleLogout = () => {
  //     logoutUser()
  //       .then(() => {
  //         toast("logged out successfully");
  //       })
  //       .catch((err) => console.log(err));
  //   };

  const buttonProfile = (
    <>
      {/* buttons and user profile */}
      <div className="items-center flex-shrink-0 lg:flex ">
        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
        {loading ? (
          <>
            <span className="loading loading-spinner text-success"></span>
          </>
        ) : (
          <>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    <div className="avatar online">
                      <div className="w-11 rounded-full">
                        <img src={user?.photoURL || logo} />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/userprofile">
                        {user?.displayName || "user Name not found"}
                      </Link>
                    </li>
                    <li>
                      <button>Log out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="self-center  w-full bg-transparent text-center border border-transparent"
                >
                  <GlassmorphismButton text="Sign In"></GlassmorphismButton>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar items-center md:items-center font-firaSans">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost !pl-0 md:hidden"
            >
              {/* small screen icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 18  18 "
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            to="/"
            className="  hover:tracking-wide transition-all duration-900 cursor-pointer rounded-full   text-2xl md:text-4xl font-bold  bg-opacity-70 md:py-5 py-2 px-0 h-auto min-h-0  "
          >
            <h2 className="font-firaSans">
              <span className="text-[#ff7f50] text-4xl">F</span>lavor
              <span className="text-[#ff7f50] text-4xl">H</span>utt
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex ">
          <ul className="menu menu-horizontal px-1 ">{navlinks}</ul>
        </div>
        <div className="navbar-end z-[4]">{buttonProfile}</div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Nav;
