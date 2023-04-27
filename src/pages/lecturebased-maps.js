import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const lecturebased = () => {
  return (
    <Layout>
      <section>
        <div className="flex p-20 justify-center containr gap-8 bg-[#F7EDE8]">
          <div className="text-9xl text-center font-semibold w-1/2">
            <br /> Road<span className="text-[#CD4636]">map</span>
            <div className="text-2xl py-16">
              Lecture material based
              <span className="text-[#CD4636]"> road map</span>
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
          <div className="flex py-20 justify-center containr">
            <div className="flex flex-col w-full text-center justify-between ">
              <div className="text-[#4D4D4D] font-semibold pb-10 text-xl border-b border-[#4D4D4D]/50">
                University Lecture material based{" "}
                <span className="text-[#CD4636]"> road map</span>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto mb-12 ">
          <div className="flex py-5 justify-center containr">
            <div className="flex  font-semibold">
              <div className="py-2  border-black border-2 rounded-lg px-3">
                Levels
              </div>
            </div>
          </div>
          <div className="justify-center pl-28 font-semibold">
            <div className="grid grid-cols-4 gap-x-18 ">
              <div>
                <div className="flex">
                  <div className="py-2  border-black border-2 rounded-lg px-3">
                    Level 1
                  </div>
                </div>
                <div className="flex">
                  <div className="py-5 ">
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1152
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1142
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1134
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1123
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1114
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1252
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1242
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1234
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1213
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 1222
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="py-2 mt-1 mr-2 border-black border-2 rounded-lg px-3">
                    Level 2
                  </div>
                </div>
                <div className="flex">
                  <div className="py-5">
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2113
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2153
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2142
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2142
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2134
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2143
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2233
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2212
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2223
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2222
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2213
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2242
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2244
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 2262
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="py-2 mt-1 mr-2 border-black border-2 rounded-lg px-3">
                    Level 3
                  </div>
                </div>
                <div className="flex">
                  <div className="py-5">
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3112
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3162
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3153
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3142
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3132
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3123
                    </div>
                    <div className="py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition duration-300 mr-5 border-black border-2 rounded-lg px-3">
                      TICT 3113
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="py-3 mt-10  border-[#4D4D4D]/50 border-2 rounded-lg px-3">
                      Comming Soon
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="py-2 mt-1 mr-2 border-black border-2 rounded-lg px-3">
                    Level 4
                  </div>
                </div>
                <div className="flex py-5">
                  <divc className="py-3 mt-10 border-[#4D4D4D]/50 border-2 rounded-lg px-3">
                    Comming Soon
                  </divc>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default lecturebased
