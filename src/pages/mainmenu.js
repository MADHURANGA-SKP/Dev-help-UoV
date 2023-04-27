import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Mainmenu = () => {
  return (
    <Layout>
      <section>
        <div className="flex p-20 justify-center containr gap-8 bg-[#F7EDE8]">
          <div className="text-9xl text-center font-semibold w-1/2">
            <br /> Road<span className="text-[#CD4636]">map</span>
          </div>

          <div className="flex flex-col text-center justify-between w-1/2">
            <div>
              <StaticImage
                src="../images/mainmenu/map.jpg"
                alt="header"
                className="w-[500px] h-[550px] object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-20">
          <div className="flex py-20 justify-center containr">
            <div className="flex flex-col w-full text-center justify-between ">
              <div className="text-[#4D4D4D] pb-10 text-xl border-b border-[#4D4D4D]/50">
                Levels
              </div>

              <div className="p-20 justify-center">
                <div className="p-5 font-semibold">
                  Lecture Matirial Based road map
                </div>
                <div>
                  <button className="  border-2 text-center border-black hover:text-white hover:bg-black transition duration-300 p-4 px-6 rounded-lg shadow-md  font-semibold">
                    Click Here
                  </button>
                  <div className="text-center pt-5 text-xl text-[#4D4D4D]/50">
                    This availible UoV students only
                  </div>
                </div>
              </div>

              <div>
                <div className="p-5 font-semibold">Additional road maps</div>
                <div>
                  <button className="  border-2 text-center border-black hover:text-white hover:bg-black transition duration-300 p-4 px-6 rounded-lg shadow-md  font-semibold">
                    Click Here
                  </button>
                  <div className="text-center pt-5 text-xl text-[#4D4D4D]/50">
                    Additional road maps are availble for visitors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Mainmenu
