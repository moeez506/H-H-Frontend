/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from "react";
import user from "../assets/User.png";
import Pass from "../assets/Lock.png";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { login } from "../apis/auth";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ApiError from "../components/ApiError";
import request from "../apis/request";
import TermsAndConditions from "../components/TermsAndConditions";
import Button from "../components/Button";

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
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log("🚀 ~ file: Login.tsx:28 ~ Login ~ isLoading:", isLoading);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<LoginProp>({
      initialValues,
      validationSchema: loginSchema,
      validate: (values) => {
        const errors: Partial<LoginProp> = {};
        if (!values.terms) {
          errors.terms = true;
        }
        return errors;
      },
      onSubmit: async (values, action) => {
        setIsLoading(true);
        if (values.terms) {
          try {
            await request
              .post("/auth/login", values)
              .then((res) => {
                setIsLoading(false);
                if (!res.data.user.isVerified) {
                  setApiError("PLease first verify your email");
                } else {
                  localStorage.setItem("auth-token", res.data.token);
                  localStorage.setItem("login-user", JSON.stringify(res.data.user));
                  if (res.data.user.isGroupAdmin) {
                    navigate("/group-Profile");
                  } else if (res.data.user.isIndividualAdmin) {
                    navigate("/individual-Profile");
                  } else {
                    navigate("/onboarding-type");
                  }

                }
              })
              .catch((err) => {
                setIsLoading(false);
                setApiError(err.response.data.msg);
              });
          } catch (error: any) {
            console.error(error);
            throw new Error(
              error.response.data.message || "Login failed. Please try again."
            );
          }
        }
      },
    });

  console.log("errors:", errors);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-[40%] bg-white rounded-2xl shadow-2xl border mt-12 md:mt-0 sm:max-w-md xl:p-0 tabletOnly:w-[60%] mobile:w-full">
            <div className="p-6 pt-6 mx-2 my-4 space-y-6 md:space-y-6 sm:p-8">
              <div className=" font-bold text-center leading-tight tracking-tight md:text-2xl text-black">
                <h1 className="text-4xl">Login</h1>
                {/* <p className="text-base my-2 font-light text-center text-gray-500 ">
            {`Already have an account? Login Here!`}
          </p> */}
              </div>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                {apiError ? <ApiError error={apiError} /> : null}
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
                  {errors.password !== undefined &&
                    touched.password === true ? (
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
                    Login
                  </button>
                  <Button
                    text="Go Back"
                    onClick={() => {
                      navigate("/home");
                    }}
                  />
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  {`Don't have an account? `}{" "}
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    SignUp here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
