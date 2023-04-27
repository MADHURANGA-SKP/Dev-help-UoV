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
              Skill based
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
              <div className="text-[#4D4D4D] font-semibold text-xl pb-10  border-b border-[#4D4D4D]/50">
                Skill based <span className="text-[#CD4636]"> road map</span>
              </div>

              <div className="p-20">
                <div className="grid grid-cols-2 gap-x-10 gap-y-10 ">
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/react.png"
                        alt="react"
                        y
                        className="w-[200px] h-[200px] object-center mt-3"
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636] ">
                        react
                      </div>
                      <div className="p-5 font-semibold">
                        React is a free and open-source front-end JavaScript
                        library for building user interfaces based on
                        components.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/angular.png"
                        alt="angular"
                        y
                        className="w-[200px] h-[200px] object-center mt-5 "
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        Angular
                      </div>
                      <div className="p-5 font-semibold">
                        Angular is a TypeScript-based, free and open-source web
                        application framework led by the Angular Team at Google
                        and by a community of individuals and corporations.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/vue.png"
                        alt="vue"
                        y
                        className="w-[200px] h-[200px] object-center "
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        Vue
                      </div>
                      <div className="p-5 font-semibold">
                        Vue.js is an open-source model–view viewmodel front end
                        JavaScript framework for building user interfaces and
                        single-page applications.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/javascript.png"
                        alt="javascript"
                        y
                        className="w-[200px] h-[200px] object-center rounded-lg "
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        JavaScript
                      </div>
                      <div className="p-5 font-semibold">
                        JavaScript (JS) is a lightweight, interpreted, or
                        just-in-time compiled programming language with
                        first-class functions.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/nodejs.png"
                        alt="nodejs"
                        y
                        className="w-[200px] h-[200px] object-center "
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        Node Js
                      </div>
                      <div className="p-5 font-semibold">
                        Node.js is a cross-platform, open-source server
                        environment that can run on Windows, Linux, Unix, macOS,
                        and more.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/typescript.png"
                        alt="typescript"
                        y
                        className="w-[200px] h-[200px] object-center "
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        TypeScript
                      </div>
                      <div className="p-5 font-semibold">
                        TypeScript is a free and open source high-level
                        programming language developed and maintained by
                        Microsoft.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/python.jpeg"
                        alt="python"
                        y
                        className="w-[200px] h-[200px] object-center mt-5"
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        Python
                      </div>
                      <div className="p-5 font-semibold">
                        Python is a high-level, general-purpose programming
                        language. Its design philosophy emphasizes code
                        readability with the use of significant indentation via
                        the off-side rule.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/mongodb.png"
                        alt="mongodb"
                        y
                        className="w-[200px] h-[200px] object-center mt-5"
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        Mongo db
                      </div>
                      <div className="p-5 font-semibold">
                        React is a free and open-source front-end JavaScript
                        library for building user interfaces based on
                        components.
                      </div>
                    </div>
                  </div>
                  <div className="border-black border-2 grid grid-cols-2 p-5 rounded-lg cursor-pointer">
                    {" "}
                    <div>
                      <StaticImage
                        src="../images/skilbased/laravel.png"
                        alt="laravel"
                        y
                        className="w-[200px] h-[200px] object-center mt-10 "
                      />
                    </div>{" "}
                    <div>
                      <div className="border-b border-[#4D4D4D]/50 font-semibold text-xl text-[#CD4636]">
                        Laravel
                      </div>
                      <div className="p-5 font-semibold">
                        Laravel is a free and open-source PHP web framework,
                        created by Taylor Otwell and intended for the
                        development of web applications following the
                        model–view–controller architectural pattern and based on
                        Symfony. (Coming soon)
                      </div>
                    </div>
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
