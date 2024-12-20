import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigationLinks = [
    ["/", "Home"],
    ["/tech", "Tech"],
    ["/cult", "Cult"],
    ["/sports", "Sports"],
    ["/mess", "Mess"],
    ["/council", "Council"],
  ];

  const navbarRef = useRef();

  const navbarHeight = `sm:min-h-[70px] sm:max-h[70px]`;

  return (
    <div className="w-full">
      <div
        className={navbarHeight}
        style={{
          height: toggleMenu ? navbarRef.current.scrollHeight + "px" : "60px",
        }}
      ></div>
      <div className="fixed z-50 top-0 left-0 w-full bg-white border-b-2 border-slate-800">
        <div
          className={
            "max-w-screen-xl m-auto p-3 flex flex-col sm:flex-row justify-between items-center overflow-hidden transition-[max-height] " +
            navbarHeight
          }
          ref={navbarRef}
          style={{
            maxHeight: toggleMenu
              ? navbarRef.current.scrollHeight + "px"
              : "60px",
          }}
        >
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className="text-3xl font-bold tracking-tight">
              <Link to="/" className="flex h-[40px] gap-4 sm:gap-6 relative">
                {/* Hostel 5 */}
                <img
                  src="/hostel5logo.png"
                  alt="logo"
                  className="scale-150 sm:scale-[2] sm:ml-4"
                />
                <div className="relative top-[3px] text-slate-800">
                  Hostel 5
                </div>
              </Link>
            </span>
            <div
              className="sm:hidden text-3xl cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              &#9776;
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <div
              className={`flex flex-col justify-center items-center sm:flex sm:flex-row text-xl gap-2 sm:gap-5 mt-2`}
            >
              {navigationLinks.map((link, index) => {
                return (
                  <Link
                    to={link[0]}
                    key={index}
                    onClick={() => setToggleMenu(false)}
                    className=" w-full text-center"
                  >
                    {link[1]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
