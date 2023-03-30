/* eslint-disable prettier/prettier */
import React from "react";
import Email from "../assets/email.png";
import Pass from "../assets/pass.png";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { login } from "../apis/auth";
import { Link } from "react-router-dom";

interface LoginProp {
  email: string;
  password: string;
  terms: boolean;
}

const initialValues: LoginProp = {
  email: "",
  password: "",
  terms: false,
};

// Todo terms validation
export default function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        if (values.terms) {
          await login({ email: values.email, password: values.password });
          action.resetForm();
        }
      },
    });
  console.log("🚀 ~ file: Login.tsx:28 ~ Login ~ errors:", errors);
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" bg-white rounded-2xl shadow-2xl border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 pt-6 mx-2 my-4 space-y-6 md:space-y-6 sm:p-8">
            <div className=" font-bold text-center leading-tight tracking-tight md:text-2xl text-black">
              <h1 className="text-4xl">Login</h1>
              <p className="text-base my-2 font-light text-center text-gray-500 ">
                {`Already have an account? Login Here!`}
              </p>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Email
                </label>
                <img src={Email} className="h-7 absolute m-2" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email !== undefined && touched.email === true ? (
                  <p className="text-red-500 text-sm ">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Password
                </label>
                <img src={Pass} className="h-7 absolute m-2" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password !== undefined && touched.password === true ? (
                  <p className="text-red-500 text-sm ">{errors.password}</p>
                ) : null}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    name="terms"
                    checked={values.terms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              {errors.terms !== undefined && touched.terms === true ? (
                <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
              ) : null}

              <button
                type="submit"
                className="w-full bg-orange-400 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-500 ">
                {`Don't have an account? `}{" "}
                <a href="#">
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    SignUp here
                  </Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
