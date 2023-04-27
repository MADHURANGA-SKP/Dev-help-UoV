import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Reactmap = () => {
  return (
    <Layout>
      <section>
        <div className="flex p-20 justify-center containr gap-8 bg-[#F7EDE8]">
          <div className="text-9xl text-center font-semibold w-1/2">
            <br /> Road<span className="text-[#CD4636]">map</span>
            <div className="text-2xl py-16">
              React <span className="text-[#CD4636]"> road map</span>
            </div>
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
          <div className="flex py-10 justify-center containr">
            <div className="flex flex-col w-full text-center justify-between ">
              <div className="text-[#4D4D4D] font-semibold pb-10 text-xl border-b border-[#4D4D4D]/50">
                React based <span className="text-[#CD4636]"> road map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-10">
          <div className="text-center  font-semibold">
            <div className="grid grid-cols-1">
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                react
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Cli Tools
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Components
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Rendering
              </div>
              <div className="grid grid-cols-2">
                <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                  Hooks
                </div>
                <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                  Rooters
                </div>
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                States
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Styling
              </div>
              <div className="flex justify-end w-3/5 mx-auto">
                <div className="grid grid-cols-2">
                  <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                    API Calls
                  </div>
                  <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                    Testing
                  </div>
                </div>
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                FrameWokrs
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Forms
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Mobile Response
              </div>
              <div className="border-2 mb-8 border-black mx-auto py-2 px-3 rounded-lg hover:text-white hover:bg-black transition duration-300 cursor-pointer">
                Front End
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Reactmap
