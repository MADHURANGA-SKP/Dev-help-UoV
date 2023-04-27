import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = () => {
  return (
    <Layout>
      <section>
        <div className="flex p-20 justify-center containr gap-8 bg-[#F7EDE8]">
          <div className="text-8xl text-center font-semibold w-1/2">
            Developer
            <br /> Roadmap
            <br /> for
            <br /> <span className="text-[#CD4636]">UoV</span>
            <br /> Students
          </div>
          <div className="border-l border-[#4D4D4D] h-100 "></div>
          <div className="flex flex-col py-20 text-center justify-between  w-1/2">
            <div>
              <div className="text-xl py-6 font-semibold">Student Sign Up</div>
              <div>
                <Link to="/signup">
                  <button className="  border-2 text-center border-black hover:text-white hover:bg-black transition duration-300 p-4 px-6 rounded-lg shadow-md  font-semibold">
                    Click Here
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="text-2xl text-[#4D4D4D] font-semibold py-6">
                Login
              </div>

              <div>
                <Link to="/login">
                  <button className=" border-2 text-center bg-black text-white  hover:text-black hover:bg-[#F7EDE8] hover:border-black transition duration-300 p-4 px-6 rounded-lg shadow-md  font-semibold">
                    Click Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-20">
          <div className="flex py-20 justify-center containr">
            <div className="flex flex-col w-full text-center justify-between ">
              <div className="text-[#4D4D4D] pb-10 text-xl border-b border-[#4D4D4D]/50">
                All you need is the plan, the road map, and the courage to press
                pn to your destinations
              </div>

              <div>
                <div className="text-8xl text-center text-black/50 font-semibold pt-20">
                  React <br />
                  Gatsby <br />
                  Tailwind-Css
                  <br />
                  JavaScript
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto ">
          <div className="pb-10">
            <div className="w-full border-t pt-10 border-[#4D4D4D]/50">
              <div className="bg-[#F7EDE8] p-20">
                <div className="text-center text-[#CD4636] font-semibold p-5 text-3xl">
                  <span className="text-8xl font-semibold text-[#CD4636]">
                    “
                  </span>
                  how this works
                </div>
                <div className="text-center text-4xl font-semibold pb-10">
                  This is an Strategic planning process.
                  <br />
                  you can explore your needs through this
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center pt-5 text-xl text-[#4D4D4D]/50">
              If you want to Explore Click here
            </div>
            <Link to="/additionalmaps">
              <div className="flex justify-center p-5 pb-10">
                <button className=" border-2 text-center bg-white text-black  hover:text-white hover:bg-[black] border-black transition duration-300 p-4 px-6 rounded-lg shadow-md  font-semibold">
                  Click Here
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
