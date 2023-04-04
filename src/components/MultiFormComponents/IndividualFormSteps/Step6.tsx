/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import Button from "../../Button";
interface Step6Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}
interface Option {
  label: string;
  value: string;
}

const Step6 = ({ currentStep, handleNextStep }: Step6Props) => {
  const [identityCheck, setIdentityCheck] = useState("");
  const { kinInformation, setKinInformation } = useContext(
    IndividualUserContext
  );

  const options: Option[] = [
    {
      label: "National Identity",
      value: "National Identity",
    },
    {
      label: "passport",
      value: "passport",
    },
    {
      label: "licsense",
      value: "licsense",
    },
  ];

  interface Values {
    identityCheck: string;
    identity: string;
    countryOfIssuance: string;
    placedIssuance: string;
    dateOfIssuance: string;
    expiryDate: string;
  }

  useEffect(() => {
    if (
      (kinInformation as { identityCheck: string }).identityCheck !== undefined
    ) {
      setIdentityCheck(
        (kinInformation as { identityCheck: string }).identityCheck
      );
      setIdentityCheck(
        (kinInformation as { identityCheck: string }).identityCheck
      );
      void setFieldValue(
        "identityCheck",
        (kinInformation as { identityCheck: string }).identityCheck
      );
    }
  }, [kinInformation]);

  const initialValues: Values = {
    identityCheck: "",
    identity: (kinInformation as Values)?.identity ?? "",
    countryOfIssuance: (kinInformation as Values)?.countryOfIssuance ?? "",
    placedIssuance: (kinInformation as Values)?.placedIssuance ?? "",
    dateOfIssuance: (kinInformation as Values)?.dateOfIssuance ?? "",
    expiryDate: (kinInformation as Values)?.expiryDate ?? "",
  };

  const validationSchema = Yup.object().shape({
    identityCheck: Yup.string().required(
      "Please check which identity you want to give"
    ),
    identity: Yup.string()
      .min(7, "Identity must be minimum 7 digits")
      .required("Identity is required"),
    countryOfIssuance: Yup.string().required("Country of Issuance is required"),
    placedIssuance: Yup.string().required("Place of Issuance is required"),
    dateOfIssuance: Yup.string().required("Date of Issuance is required"),
    expiryDate: Yup.string().required("Expiry Date is required"),
  });

  const {
    setFieldValue,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setKinInformation((prevState) => ({ ...prevState, ...values }));
      // console.log("🚀 ~ file: Step6.tsx:72 ~ Step6 ~ values:", values);
      handleNextStep(7);
    },
  });

  return (
    <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto desktop:text-2xl laptop:text-xl tabletOnly:text-lg mobile:text-base  w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Kin Identity Info</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-gray-800 font-bold mb-2">
            Which identity would you like to provide:
          </p>
          {errors.identityCheck !== null &&
          touched.identityCheck !== null &&
          Object.prototype.hasOwnProperty.call(errors, "identityCheck") &&
          Object.prototype.hasOwnProperty.call(touched, "identityCheck") ? (
            <p className="text-[red]">{errors.identityCheck}</p>
          ) : null}

          {options.map((option) => (
            <div key={option.value} className="flex items-center mb-2">
              <input
                type="radio"
                name="identityCheck"
                value={option.value}
                checked={identityCheck === option.value}
                onChange={() => {
                  setIdentityCheck(option.value);
                  void setFieldValue("identityCheck", option.value);
                }}
                className="mr-2"
              />
              <label
                htmlFor={option.value}
                className="text-gray-700"
                onClick={() => {
                  setIdentityCheck(option.value);
                  void setFieldValue("identityCheck", option.value);
                }}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="identity"
          >
            Identity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="identity"
            name="identity"
            type="number"
            value={values.identity}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.identity !== null &&
          touched.identity !== null &&
          Object.prototype.hasOwnProperty.call(errors, "identity") &&
          Object.prototype.hasOwnProperty.call(touched, "identity") ? (
            <p className="text-[red]">{errors.identity}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="countryOfIssuance"
          >
            Country Of Issuance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="countryOfIssuance"
            name="countryOfIssuance"
            type="text"
            value={values.countryOfIssuance}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.countryOfIssuance !== null &&
          touched.countryOfIssuance !== null &&
          Object.prototype.hasOwnProperty.call(errors, "countryOfIssuance") &&
          Object.prototype.hasOwnProperty.call(touched, "countryOfIssuance") ? (
            <p className="text-[red]">{errors.countryOfIssuance}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="placedIssuance"
          >
            Place Of Issuance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="placedIssuance"
            name="placedIssuance"
            type="text"
            value={values.placedIssuance}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.placedIssuance !== null &&
          touched.placedIssuance !== null &&
          Object.prototype.hasOwnProperty.call(errors, "placedIssuance") &&
          Object.prototype.hasOwnProperty.call(touched, "placedIssuance") ? (
            <p className="text-[red]">{errors.placedIssuance}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="dateOfIssuance"
          >
            Date Of Issuance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateOfIssuance"
            name="dateOfIssuance"
            type="text"
            value={values.dateOfIssuance}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.dateOfIssuance !== null &&
          touched.dateOfIssuance !== null &&
          Object.prototype.hasOwnProperty.call(errors, "dateOfIssuance") &&
          Object.prototype.hasOwnProperty.call(touched, "dateOfIssuance") ? (
            <p className="text-[red]">{errors.dateOfIssuance}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="expiryDate"
          >
            Expiry Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expiryDate"
            name="expiryDate"
            type="text"
            value={values.expiryDate}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.expiryDate !== null &&
          touched.expiryDate !== null &&
          Object.prototype.hasOwnProperty.call(errors, "expiryDate") &&
          Object.prototype.hasOwnProperty.call(touched, "expiryDate") ? (
            <p className="text-[red]">{errors.expiryDate}</p>
          ) : null}
        </div>

        <Button text="Next" isForm />
        <Button
          text="Go Back"
          isForm
          onClick={() => {
            handleNextStep(5);
          }}
        />
      </form>
    </div>
  );
};

export default Step6;
