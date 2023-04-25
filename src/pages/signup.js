import React from "react"
import Layout from "../components/layout"
import { useState } from "react"

const Signup = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [registrationNumber, setRegistrationNumber] = useState("")
  const [academicYear, setAcademicYear] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userName, setUserName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    // You can add your own logic to handle the form submission here
  }

  return (
    <Layout>
      <section>
        <div className="p-20 mx-auto container">
          <div>
            <div className="text-5xl text-center font-semibold">Sign Up</div>
            <div className="text-xl text-center py-5 text-gray-700">
              Sign Up Here
            </div>
            <div className="justify-start font-semibold border-b border-[#4D4D4D]/50">
              <span className="text-[#CD4636]">*</span> All Fields{" "}
              <span className="text-[#CD4636]">are</span>
              <br />
              required if you're a student
            </div>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 gap-x-20">
                <div className=" my-6 w-full ">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-semibold"
                  >
                    Full Name<span className="text-[#CD4636]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold "
                    value={fullName}
                    onChange={event => setFullName(event.target.value)}
                    required
                  />
                </div>
                <div className="my-6 w-full">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold"
                  >
                    Email<span className="text-[#CD4636]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="my-6 w-full">
                  <label
                    htmlFor="registrationNumber"
                    className="block text-gray-700 font-semibold"
                  >
                    Registration Number<span className="text-[#CD4636]">*</span>
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                    value={registrationNumber}
                    onChange={event =>
                      setRegistrationNumber(event.target.value)
                    }
                  />
                </div>
                <div className="my-6 w-full">
                  <label
                    htmlFor="academicYear"
                    className="block text-gray-700 font-semibold"
                  >
                    Academic Year<span className="text-[#CD4636]">*</span>
                  </label>
                  <input
                    type="text"
                    id="academicYear"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                    value={academicYear}
                    onChange={event => setAcademicYear(event.target.value)}
                  />
                </div>

                <div className="my-6 w-full">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                  />
                </div>
                <div className="my-6 w-full">
                  <lable
                    htmlFor="userName"
                    className="block text-gray-700 font-semibold"
                  >
                    User Name
                  </lable>
                  <input
                    type="userName"
                    id="userName"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    required
                  />
                </div>

                <div className="my-6 w-full">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="block w-full h-50 border-1 border border-black/50 p-4 px-6 rounded-lg shadow-md  font-semibold"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="my-6 w-full text-center">
                <button
                  type="submit"
                  className="bg-black shadow-md p-4 px-6 rounded-lg cursor-pointer hover:bg-white border hover:border-black/50 hover:text-black transition duration-300 font-semibold text-white"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Signup
