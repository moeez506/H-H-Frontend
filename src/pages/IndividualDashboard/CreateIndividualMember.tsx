/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IndividualUserContext } from "../../contexts/individualOnboardingContext";
import Button from "../../components/Button";

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
  relationship: string;
  otherRelationship: string;
}

const CreateIndividualMember = () => {
  const { kinInformation, setKinInformation } = useContext(
    IndividualUserContext
  );

  const initialValues: Values = {
    firstName: (kinInformation as Values)?.firstName ?? "",
    middleName: (kinInformation as Values)?.middleName ?? "",
    lastName: (kinInformation as Values)?.lastName ?? "",
    dob: (kinInformation as Values)?.dob ?? "",
    placeOfBirth: (kinInformation as Values)?.placeOfBirth ?? "",
    nationality: (kinInformation as Values)?.nationality ?? "",
    countryOfResidence: (kinInformation as Values)?.countryOfResidence ?? "",
    address: (kinInformation as Values)?.address ?? "",
    zipCode: (kinInformation as Values)?.zipCode ?? "",
    homePhoneNumber: (kinInformation as Values)?.homePhoneNumber ?? "",
    cellNumber: (kinInformation as Values)?.cellNumber ?? "",
    email: (kinInformation as Values)?.email ?? "",
    relationship: (kinInformation as Values)?.relationship ?? "",
    otherRelationship: (kinInformation as Values)?.otherRelationship ?? "",
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
    homePhoneNumber: Yup.string()
      .max(15, "Home Phone Number max 15")
      .min(7, "Home Phone Number min 7")
      .required("Home Phone Number is required"),
    cellNumber: Yup.string()
      .max(15, "Cell Number max 15")
      .min(7, "Cell Number min 7")
      .required("Cell Number is required"),
    email: Yup.string().email().required("Email is required"),
    relationship: Yup.string().required("Relatioship is required"),
    otherRelationship: Yup.string().required("Other Relationship is required"),
  });

  //TODO cell no validation and zip code

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        setKinInformation((prevState) => ({ ...prevState, ...values }));
        // console.log("🚀 ~ file: Step5.tsx:70 ~ Step5 ~ values:", values)
        // handleNextStep(6);
      },
    });

  return (
    <div className=" desktop:text-xl laptop:text-xl tabletOnly:text-lg mobile:text-base">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Next Of Kin / Successor information
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between tabletOnly:flex-wrap mobile:flex-wrap">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="firstName"
          >
            First Name*
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
          {errors.firstName !== null &&
          touched.firstName !== null &&
          Object.prototype.hasOwnProperty.call(errors, "firstName") &&
          Object.prototype.hasOwnProperty.call(touched, "firstName") ? (
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
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name*
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
          {errors.lastName !== null &&
          touched.lastName !== null &&
          Object.prototype.hasOwnProperty.call(errors, "lastName") &&
          Object.prototype.hasOwnProperty.call(touched, "lastName") ? (
            <p className="text-[red]">{errors.lastName}</p>
          ) : null}
        </div>
        </div>
        <div className="flex justify-between tabletOnly:flex-wrap mobile:flex-wrap">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            Date of Birth*
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
          {errors.dob !== null &&
          touched.dob !== null &&
          Object.prototype.hasOwnProperty.call(errors, "dob") &&
          Object.prototype.hasOwnProperty.call(touched, "dob") ? (
            <p className="text-[red]">{errors.dob}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="placeOfBirth"
          >
            Place of Birth*
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
          {errors.placeOfBirth !== null &&
          touched.placeOfBirth !== null &&
          Object.prototype.hasOwnProperty.call(errors, "placeOfBirth") &&
          Object.prototype.hasOwnProperty.call(touched, "placeOfBirth") ? (
            <p className="text-[red]">{errors.placeOfBirth}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nationality"
          >
            Nationality*
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
          {errors.nationality !== null &&
          touched.nationality !== null &&
          Object.prototype.hasOwnProperty.call(errors, "nationality") &&
          Object.prototype.hasOwnProperty.call(touched, "nationality") ? (
            <p className="text-[red]">{errors.nationality}</p>
          ) : null}
        </div>
        </div>
        <div className="flex justify-between tabletOnly:flex-wrap mobile:flex-wrap">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="countryOfResidence"
          >
            Country of Residence*
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
          touched.countryOfResidence !== null &&
          Object.prototype.hasOwnProperty.call(errors, "countryOfResidence") &&
          Object.prototype.hasOwnProperty.call(
            touched,
            "countryOfResidence"
          ) ? (
            <p className="text-[red]">{errors.countryOfResidence}</p>
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
            type="text"
            name="address"
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
            type="number"
            name="zipCode"
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
        </div>
        <div className="flex justify-between tabletOnly:flex-wrap mobile:flex-wrap">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="homePhoneNumber"
          >
            Home Phone Number*
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
          touched.homePhoneNumber !== null &&
          Object.prototype.hasOwnProperty.call(errors, "homePhoneNumber") &&
          Object.prototype.hasOwnProperty.call(touched, "homePhoneNumber") ? (
            <p className="text-[red]">{errors.homePhoneNumber}</p>
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
            type="number"
            name="cellNumber"
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
            type="text"
            name="email"
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
        </div>
        <div className="flex flex-col items-start">
          <label
            htmlFor="relationship"
            className="text-gray-800 font-bold mb-2"
          >
            Relationship*
          </label>
          {errors.relationship !== null &&
          touched.relationship !== null &&
          Object.prototype.hasOwnProperty.call(errors, "relationship") &&
          Object.prototype.hasOwnProperty.call(touched, "relationship") ? (
            <p className="text-[red]">{errors.relationship}</p>
          ) : null}

          <select
            name="relationship"
            id="relationship"
            value={values.relationship}
            onBlur={handleBlur}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-4"
          >
            <option value="">Select Relationship</option>
            <option value="mother">Mother</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="spouse">Spouse</option>
            <option value="daughter">Daughter</option>
            <option value="son">Son</option>
            <option value="others">Others</option>
          </select>
          {values.relationship === "others" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="otherRelationship"
              >
                Other Relationship*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otherRelationship"
                type="text"
                name="otherRelationship"
                value={values.otherRelationship}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.otherRelationship !== null &&
              touched.otherRelationship !== null &&
              Object.prototype.hasOwnProperty.call(
                errors,
                "otherRelationship"
              ) &&
              Object.prototype.hasOwnProperty.call(
                touched,
                "otherRelationship"
              ) ? (
                <p className="text-[red]">{errors.otherRelationship}</p>
              ) : null}
            </div>
          )}
        </div>
        <Button text="Next" isForm />
        <Button
          text="Go Back"
          isForm
          onClick={() => {
            // handleNextStep(4);
          }}
        />
      </form>
    </div>
  );
};

export default CreateIndividualMember;
