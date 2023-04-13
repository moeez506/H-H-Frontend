/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import user from "../assets/User.png";
import Pass from "../assets/Lock.png";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
// import { registerUser } from "../apis/auth";
import request from "../apis/request";
import ApiSuccess from "../components/ApiSuccess";
import ApiError from "../components/ApiError";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Button from "../components/Button";
import TermsAndConditions from "../components/TermsAndConditions";

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
  const navigate = useNavigate();
  const [apiSuccess, setApiSuccess] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  console.log(
    "🚀 ~ file: Register.tsx:35 ~ Register ~ apiSuccess:",
    apiSuccess
  );
  const [apiError, setApiError] = useState<string>();
  console.log("🚀 ~ file: Register.tsx:36 ~ Register ~ apiError:", apiError);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerUser = async (values: any) => {
    try {
      const response = await request.post("/auth/register", values);
      setIsLoading(false);
      setApiSuccess(response.data.message);

      return response.data;
    } catch (error: any) {
      // if (error.response) {
      setApiSuccess("");
      setApiError(error.response.data.msg);
      console.log(error.response.data.msg);
      // }
      setIsLoading(false);
      throw new Error(
        error.response.data.message || "Registration failed. Please try again."
      );
    }
  };

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
        setIsLoading(true);
        if (values.terms) {
          await registerUser(values);
        }
      },
    });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-[40%] bg-white rounded-2xl shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 tabletOnly:w-[60%] mobile:w-full">
          <div className="p-6 pt-6 mx-2 my-4 space-y-6 md:space-y-6 sm:p-8">
            <div className=" font-bold text-center leading-tight tracking-tight md:text-2xl text-black">
              <h1 className="text-4xl">SignUp Now</h1>
              <p className="text-sm font-light text-gray- text-center ">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              {apiSuccess ? (
                <ApiSuccess success={apiSuccess} />
              ) : apiError ? (
                <ApiError error={apiError} />
              ) : null}
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  First Name
                </label>
                <img src={user} className="h-7 absolute m-2" />
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
                <img src={user} className="h-7 absolute m-2" />
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
                <img src={user} className="h-7 absolute m-2" />
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
                    onBlur={handleBlur}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light">
                    I accept the{" "}
                    <button
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      Terms and Conditions
                    </button>
                  </label>
                </div>

                {isOpen && (
                  <TermsAndConditions isOpen={isOpen} setIsOpen={setIsOpen} />
                )}
              </div>
              {errors.terms !== undefined && touched.terms === true ? (
                <p className="text-red-500 text-sm mt-1">
                  You must agree to the terms and conditions
                </p>
              ) : null}
              <div className="flex justify-around items-center">
                <button
                  type="submit"
                  className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-12 py-2 text-xl font-medium flex justify-center items-center"
                >
                  SignUp
                </button>
                <Button
                  text="Go Back"
                  onClick={() => {
                    navigate("/home");
                  }}
                />
              </div>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
