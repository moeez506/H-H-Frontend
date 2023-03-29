/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";

interface Step5Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}
interface Values {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  placeOfBirth: string;
  nationality: string;
  countryOfResidence: string;
  address: string;
  zipCode: string;
  homePhoneNumber: string;
  cellNumber: string;
  email: string;
}

const Step5 = ({ currentStep, handleNextStep }: Step5Props) => {
  const { additionalMember, setAdditionalMember } = useContext(
    IndividualUserContext
  );

  const initialValues: Values = {
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    placeOfBirth: "",
    nationality: "",
    countryOfResidence: "",
    address: "",
    zipCode: "",
    homePhoneNumber: "",
    cellNumber: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Last Name is required"),
    dob: Yup.date().required("Date of Birth is required"),
    placeOfBirth: Yup.string().required("Place of Birth is required"),
    nationality: Yup.string().required("Nationality is required"),
    countryOfResidence: Yup.string().required(
      "Country of Residence is required"
    ),
    address: Yup.string().required("Address is required"),
    zipCode: Yup.string().max(5).min(5).required("Zip Code is required"),
    homePhoneNumber: Yup.string().required("Home Phone Number is required"),
    cellNumber: Yup.string().max(15).min(7).required("Cell Number is required"),
    email: Yup.string().email().required("Email is required"),
  });

  //TODO cell no validation and zip code

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        setAdditionalMember(values);
        // console.log("🚀 ~ file: Step5.tsx:70 ~ Step5 ~ values:", values)
        handleNextStep(6);
      },
    });

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.firstName !== null && touched.firstName !== null ? (
            <p className="text-[red]">{errors.firstName}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="middleName"
          >
            Middle Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="middleName"
            name="middleName"
            type="text"
            value={values.middleName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.middleName !== null && touched.middleName !== null ? (
            <p className="text-[red]">{errors.middleName}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            value={values.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.lastName !== null && touched.lastName !== null ? (
            <p className="text-[red]">{errors.lastName}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="text"
            name="dob"
            value={values.dob}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.dob !== null && touched.dob !== null ? (
            <p className="text-[red]">{errors.dob}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="placeOfBirth"
          >
            Place of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="placeOfBirth"
            type="text"
            name="placeOfBirth"
            value={values.placeOfBirth}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.placeOfBirth !== null && touched.placeOfBirth !== null ? (
            <p className="text-[red]">{errors.placeOfBirth}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nationality"
          >
            Nationality
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nationality"
            type="text"
            name="nationality"
            value={values.nationality}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.nationality !== null && touched.nationality !== null ? (
            <p className="text-[red]">{errors.nationality}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="countryOfResidence"
          >
            Country of Residence
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="countryOfResidence"
            type="text"
            name="countryOfResidence"
            value={values.countryOfResidence}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.countryOfResidence !== null &&
          touched.countryOfResidence !== null ? (
            <p className="text-[red]">{errors.countryOfResidence}</p>
          ) : null}{" "}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.address !== null && touched.address !== null ? (
            <p className="text-[red]">{errors.address}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="zipCode"
          >
            Zip Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zipCode"
            type="number"
            name="zipCode"
            value={values.zipCode}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.zipCode !== null && touched.zipCode !== null ? (
            <p className="text-[red]">{errors.zipCode}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="homePhoneNumber"
          >
            Home Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="homePhoneNumber"
            type="number"
            name="homePhoneNumber"
            value={values.homePhoneNumber}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.homePhoneNumber !== null &&
          touched.homePhoneNumber !== null ? (
            <p className="text-[red]">{errors.homePhoneNumber}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cellNumber"
          >
            Cell Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cellNumber"
            type="number"
            name="cellNumber"
            value={values.cellNumber}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.cellNumber !== null && touched.cellNumber !== null ? (
            <p className="text-[red]">{errors.cellNumber}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email !== null && touched.email !== null ? (
            <p className="text-[red]">{errors.email}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step5;
