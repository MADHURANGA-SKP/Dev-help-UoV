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
              <div className="text-[#4D4D4D] font-semibold pb-10 text-xl border-b border-[#4D4D4D]/50">
                Skill based <span className="text-[#CD4636]"> road map</span>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
