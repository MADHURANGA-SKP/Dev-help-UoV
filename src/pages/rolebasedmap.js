import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return (
    <Layout>
      <section>
        <div className="flex p-20 justify-center containr gap-8 bg-[#F7EDE8]">
          <div className="text-9xl text-center font-semibold w-1/2">
            <br /> Road<span className="text-[#CD4636]">map</span>
            <div className="text-2xl py-16">
              Role based
              <span className="text-[#CD4636]"> road map</span>
            </div>
          </div>

          <div className="flex flex-col text-center justify-between w-1/2">
            <div>
              <StaticImage
                src="../images/mainmenu/map.jpg"
                alt="header"
                y
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
                Role based <span className="text-[#CD4636]"> road map</span>
              </div>

              <div>
                <div className="p-20">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-10  ">
                    <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images/rolebased/frontend.jpg"
                          alt="frontend"
                          y
                          className="w-[200px] h-[200px] object-center mt-16 rounded-lg"
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636] ">
                          Front-end
                        </div>
                        <div className="p-5 font-semibold">
                          Front-end developer creates websites and applications
                          using web languages such as HTML, CSS, and JavaScript
                          that allow users to access and interact with the site
                          or app. When you visit a website, the design elements
                          you see were created by a front-end developer.
                        </div>
                      </div>
                    </div>
                    <div className="border-black/50 border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images/rolebased/backend.jpg"
                          alt="backend"
                          y
                          className="w-[200px] h-[200px] object-center mt-16 rounded-lg"
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          Coming Soon
                        </div>
                        <div className="p-5 font-semibold">Coming Soon</div>
                      </div>
                    </div>
                    <div className="border-black/50 border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images/rolebased/ux-design.jpg"
                          alt="uxdesign"
                          y
                          className="w-[200px] h-[200px] object-center mt-16 mb-16 rounded-lg"
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          Coming Soon
                        </div>
                        <div className="p-5 font-semibold">Coming Soon</div>
                      </div>
                    </div>
                    {/* <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images//.png"
                          alt=""
                          y
                          className="w-[200px] h-[200px] object-center "
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          
                        </div>
                        <div className="p-5 font-semibold">
                          
                        </div>
                      </div>
                    </div>
                    <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images//.png"
                          alt=""
                          y
                          className="w-[200px] h-[200px] object-center "
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          
                        </div>
                        <div className="p-5 font-semibold">
                          
                        </div>
                      </div>
                    </div>
                    <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images//.png"
                          alt=""
                          y
                          className="w-[200px] h-[200px] object-center "
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          TypeScript
                        </div>
                        <div className="p-5 font-semibold">
                          
                        </div>
                      </div>
                    </div>
                    <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images//.jpeg"
                          alt=""
                          y
                          className="w-[200px] h-[200px] object-center mt-5"
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          
                        </div>
                        <div className="p-5 font-semibold">
                          
                        </div>
                      </div>
                    </div>
                    <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images//.png"
                          alt=""
                          y
                          className="w-[200px] h-[200px] object-center mt-5"
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          
                        </div>
                        <div className="p-5 font-semibold">
                        
                        </div>
                      </div>
                    </div>
                    <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg">
                      {" "}
                      <div>
                        <StaticImage
                          src="../images//laravel.png"
                          alt=""
                          y
                          className="w-[200px] h-[200px] object-center mt-10 "
                        />
                      </div>{" "}
                      <div>
                        <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                          
                        </div>
                        <div className="p-5 font-semibold">
                         
                        </div>
                      </div>
                    </div> */}
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

export default Home
