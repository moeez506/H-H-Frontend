/* eslint-disable prettier/prettier */
import React from "react";
import Email from "../assets/email.png";
import Pass from "../assets/pass.png";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { registerUser } from "../apis/auth";

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
  terms: boolean;
}


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  terms: false,
};
export default function Register() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues,
      validationSchema: signUpSchema,
      validate: (values) => {
        const errors: Partial<SignUpFormValues> = {};
        if (!values.terms) {
          errors.terms = true;
        }
        return errors;
      },
      onSubmit: async (values, action) => {
        if (values.terms) {
          await registerUser(values);
          action.resetForm();
        }
      },

    });
  // console.log(errors);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-2xl shadow-2xl border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 pt-6 mx-2 my-4 space-y-6 md:space-y-6 sm:p-8">
            <div className=" font-bold text-center leading-tight tracking-tight md:text-2xl text-black">
              <h1 className="text-4xl">SignUp Now</h1>
              <p className="text-base my-2 font-light text-center text-gray-500 ">
                {`Don't have an account yet? Register Here!`}
              </p>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  First Name
                </label>
                <img src={Email} className="h-7 absolute m-2" />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                  placeholder="Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName !== undefined &&
                  touched.firstName === true ? (
                  <p className="text-red-500 text-sm ">{errors.firstName}</p>
                ) : (
                  <p></p>
                )}
              </div>{" "}
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Last Name
                </label>
                <img src={Email} className="h-7 absolute m-2" />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                  placeholder="Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName !== undefined && touched.lastName === true ? (
                  <p className="text-red-500 text-sm ">{errors.lastName}</p>
                ) : (
                  <p></p>
                )}
              </div>
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
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Confirm Password
                </label>
                <img src={Pass} className="h-7 absolute m-2" />
                <input
                  type="password"
                  name="confirm_password"
                  id="password"
                  placeholder="••••••••"
                  className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password !== undefined &&
                  touched.confirm_password === true ? (
                  <p className="text-red-500 text-sm ">
                    {errors.confirm_password}
                  </p>
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
                <p className="text-red-500 text-sm ">You must agree to the terms and conditions</p>
              ) : null}
              <button
                type="submit"
                className="w-full bg-orange-400 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                SignUp
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


