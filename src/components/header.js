import * as React from "react"
import "@fontsource/montserrat-alternates"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Link } from "gatsby"

const Header = ({ isLoggedIn, onLogout }) => {
  // add isLoggedIn and onLogout props
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const dropdownMenuClasses = isOpen
    ? "block absolute top-10 left-0 z-50 bg-white shadow-md  py-1 rounded-lg w-40 "
    : "hidden"

  const dropdownItemClasses =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"

  return (
    <div>
      <div className="flex  justify-between  h-full  p-8 bg-[#F7EDE8] ">
        <div className=" border-2 text-center border-black p-4 px-6 rounded-lg shadow-md  font-semibold">
          Dev.Help.UoV
        </div>
        <div className="flex justify-center p-4 gap-12 ">
          <Link to="/home">
            <div className="cursor-pointer font-semibold">Home</div>
          </Link>
          <div className="cursor-pointer font-semibold">About</div>
          <div className="relative inline-block text-left">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="mr-2 font-semibold">Maps</div>
              <ChevronDownIcon
                className={`w-5 h-5 transform ${
                  isOpen ? "rotate-180 transition duration-300" : ""
                }`}
              />
            </div>

            <div className={dropdownMenuClasses}>
              <Link to="/lecturebased-maps">
                <a href="#" className={dropdownItemClasses}>
                  Level-based
                </a>
              </Link>
              <Link to="/skillbasedmap">
                <a href="#" className={dropdownItemClasses}>
                  Skill-based
                </a>
              </Link>
              <Link to="/rolebasedmap">
                <a href="#" className={dropdownItemClasses}>
                  Role-based
                </a>
              </Link>
            </div>
          </div>

          <Link to="/additionalmaps">
            <div className="cursor-pointer font-semibold">Additional</div>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <button
              className="bg-black shadow-md p-4 px-6 rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300 font-semibold text-white"
              onClick={onLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/adminlogin">
              <button className="bg-black shadow-md p-4 px-6 rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300 font-semibold text-white">
                Admin Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
