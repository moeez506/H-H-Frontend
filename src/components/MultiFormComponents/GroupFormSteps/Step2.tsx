/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";
import Button from "../../Button";
interface Step2Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

const Step2 = ({ currentStep, handleNextStep }: Step2Props) => {
  const { createGroup, setCreateGroup } = useContext(GroupUserContext);
  interface Values {
    groupName: string;
    registerdMembers: number;
    countryOfOperation: string;
    address: string;
    zipCode: string;
    cellNumber: string;
    email: string;
    website: string;
  }

  const initialValues: Values = {
    groupName: (createGroup as Values)?.groupName ?? "",
    registerdMembers: (createGroup as Values)?.registerdMembers ?? "",
    countryOfOperation: (createGroup as Values)?.countryOfOperation ?? "",
    address: (createGroup as Values)?.address ?? "",
    zipCode: (createGroup as Values)?.zipCode ?? "",
    cellNumber: (createGroup as Values)?.cellNumber ?? "",
    email: (createGroup as Values)?.email ?? "",
    website: (createGroup as Values)?.website ?? "",
  };

  const validationSchema = Yup.object().shape({
    groupName: Yup.string().required("Group name is required"),
    registerdMembers: Yup.number()
      .required("Number of registered members is required")
      .min(1, "Number of registered members must be at least 1"),
    countryOfOperation: Yup.string().required(
      "Country of operation is required"
    ),
    address: Yup.string().required("Address is required"),
    zipCode: Yup.string()
      .max(5, "Zip code should be exact 5 digits")
      .min(5, "Zip code should be exact 5 integers")
      .required("Zip Code is required"),
    cellNumber: Yup.string()
      .max(15, "Cell Number can be max 15 digits")
      .min(7, "Cell Number can be min 7 digits")
      .required("Cell Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    website: Yup.string().url("Invalid URL").required("Website is required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        setCreateGroup(values);
        console.log("🚀 ~ file: step2.tsx:60 ~ Step2 ~ values:", values);
        handleNextStep(3);
      },
    });

  return (
    <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto   desktop:text-2xl laptop:text-xl tabletOnly:text-lg mobile:text-base w-full">
      <h1 className="text-4xl font-bold mb-6 text-center"> Group Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="groupName"
          >
            Association/Group Name*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="groupName"
            name="groupName"
            type="text"
            value={values.groupName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.groupName !== null &&
          touched.groupName !== null &&
          Object.prototype.hasOwnProperty.call(errors, "groupName") &&
          Object.prototype.hasOwnProperty.call(touched, "groupName") ? (
            <p className="text-[red]">{errors.groupName}</p>
          ) : null}
        </div>{" "}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="registerdMembers"
          >
            Number of Registered Members*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="registerdMembers"
            name="registerdMembers"
            type="number"
            value={values.registerdMembers}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.registerdMembers !== null &&
          touched.registerdMembers !== null &&
          Object.prototype.hasOwnProperty.call(errors, "registerdMembers") &&
          Object.prototype.hasOwnProperty.call(touched, "registerdMembers") ? (
            <p className="text-[red]">{errors.registerdMembers}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="countryOfOperation"
          >
            Country of Operation*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="countryOfOperation"
            name="countryOfOperation"
            type="text"
            value={values.countryOfOperation}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.countryOfOperation !== null &&
          touched.countryOfOperation !== null &&
          Object.prototype.hasOwnProperty.call(errors, "countryOfOperation") &&
          Object.prototype.hasOwnProperty.call(
            touched,
            "countryOfOperation"
          ) ? (
            <p className="text-[red]">{errors.countryOfOperation}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
            Address*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.address !== null &&
          touched.address !== null &&
          Object.prototype.hasOwnProperty.call(errors, "address") &&
          Object.prototype.hasOwnProperty.call(touched, "address") ? (
            <p className="text-[red]">{errors.address}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="zipCode"
          >
            Zip Code*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zipCode"
            name="zipCode"
            type="number"
            value={values.zipCode}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.zipCode !== null &&
          touched.zipCode !== null &&
          Object.prototype.hasOwnProperty.call(errors, "zipCode") &&
          Object.prototype.hasOwnProperty.call(touched, "zipCode") ? (
            <p className="text-[red]">{errors.zipCode}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cellNumber"
          >
            Cell Number*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cellNumber"
            name="cellNumber"
            type="number"
            value={values.cellNumber}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.cellNumber !== null &&
          touched.cellNumber !== null &&
          Object.prototype.hasOwnProperty.call(errors, "cellNumber") &&
          Object.prototype.hasOwnProperty.call(touched, "cellNumber") ? (
            <p className="text-[red]">{errors.cellNumber}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email !== null &&
          touched.email !== null &&
          Object.prototype.hasOwnProperty.call(errors, "email") &&
          Object.prototype.hasOwnProperty.call(touched, "email") ? (
            <p className="text-[red]">{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="website"
          >
            Website*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            name="website"
            type="text"
            value={values.website}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.website !== null &&
          touched.website !== null &&
          Object.prototype.hasOwnProperty.call(errors, "website") &&
          Object.prototype.hasOwnProperty.call(touched, "website") ? (
            <p className="text-[red]">{errors.website}</p>
          ) : null}
        </div>
        <Button text="Next" isForm />
        <Button
          text="Go Back"
          isForm
          onClick={() => {
            handleNextStep(1);
          }}
        />
      </form>
    </div>
  );
};

export default Step2;
