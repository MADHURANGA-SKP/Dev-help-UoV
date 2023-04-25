import * as React from "react"
import Layout from "../components/layout"

const Login = () => {
  return (
    <Layout>
      <section>
        <div className="p-10 mx-auto container">
          <div>
            <div className="text-5xl text-center font-semibold">
              Admin Login
            </div>
            <div className="text-xl text-center py-10 text-gray-700 ">
              login Here
            </div>
            <div className="border-b border-[#4D4D4D]/50" />
            <div className="mt-10">
              <form className=" rounded-md p-8">
                <div className="bg-[#F7EDE8]   py-10">
                  <div className="flex justify-center">
                    <div className="mb-4 ">
                      <label
                        htmlFor="username"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="block w-[400px] h-50 border-2  border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="block w-[400px] h-50 border-2  border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center py-10">
                  <button
                    type="submit"
                    className="border-2 text-center border-black p-4 px-6 rounded-lg shadow-md hover:text-white hover:bg-black transition duration-300 font-semibold"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Login
