import * as React from "react"
import { ArrowLongUpIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react"

const Footer = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <div className=" mt-auto ">
        <div className="container mx-auto px-20">
          <div>
            <button
              className={`bg-white border-2 rounded-lg border-black z-50 transition-opacity duration-300 ${
                showButton ? "opacity-100" : "opacity-0"
              } fixed bottom-28 right-20`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowLongUpIcon className="text-black  w-10 text-3xl" />
            </button>
          </div>
          <div className="flex justify-between items-center border-t border-[#4D4D4D]/50 py-8 ">
            <div>
              © {new Date().getFullYear()}, . All Rights Reserved.
              {` `}
            </div>
            <div className="flex gap-3">
              <div className="cursor-pointer">Privacy</div>
              <div className="cursor-pointer">Terms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
