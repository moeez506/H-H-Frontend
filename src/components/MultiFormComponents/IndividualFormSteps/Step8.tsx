/* eslint-disable prettier/prettier */
/* eslint-disable import/no-duplicates */
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
interface Option {
  label: string;
  value: string;
}

interface Step8Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

const options: Option[] = [
  {
    label: "yes",
    value: "yes",
  },
  {
    label: "no",
    value: "no",
  },
];

const Step8 = ({ currentStep, handleNextStep }: Step8Props) => {
  const [preExistingIssue, setPreExisting] = useState<string | null>(null);
  const [terminalIllness, setTerminalIllness] = useState("");
  const [moreInfo, setMoreInfo] = useState("");

  interface Values {
    preExistingIssue: string;
    issueSpecify: string;
    terminalIllness: string;
    terminalIssueSpecify: string;
    moreInfo: string;
  }

  const initialValues: Values = {
    preExistingIssue: "",
    issueSpecify: "",
    terminalIllness: "",
    terminalIssueSpecify: "",
    moreInfo: "",
  };

  const validationSchema = Yup.object().shape({
    preExistingIssue: Yup.string().required("Please select an option"),
    issueSpecify:
      preExistingIssue === "yes"
        ? Yup.string().required("Specify your pre-existing issue")
        : Yup.string().notRequired(),
    terminalIllness: Yup.string().required("Please select an option"),
    terminalIssueSpecify:
      terminalIllness === "yes"
        ? Yup.string().required("Specify your terminal illness")
        : Yup.string().notRequired(),
    moreInfo: Yup.string().required("Please select an option"),
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
      console.log("🚀 ~ file: Step8.tsx:70 ~ Step8 ~ values:", values);
      handleNextStep(9);
    },
  });

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Step No: 6</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="text-gray-800 font-bold mb-2">
              Question: Do you have any pre-existing health issues that we
              should be aware of ?{" "}
            </p>
            {errors.preExistingIssue !== null &&
            touched.preExistingIssue !== null ? (
              <p className="text-[red]">{errors.preExistingIssue}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="preExistingIssue"
                  value={option.value}
                  checked={preExistingIssue === option.value}
                  onChange={() => {
                    setPreExisting(option.value);
                    void setFieldValue("preExistingIssue", option.value);
                  }}
                  className="mr-2"
                />

                <label htmlFor={option.value} className="text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {preExistingIssue === "yes" && (
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div>
                  <label htmlFor="issueSpecify">Kindly Specify: </label>

                  <input
                    type="text"
                    name="issueSpecify"
                    id="issueSpecify"
                    value={values.issueSpecify}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.issueSpecify !== null &&
                  touched.issueSpecify !== null ? (
                    <p className="text-[red]">{errors.issueSpecify}</p>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          <div className="mb-6">
            <p className="text-gray-800 font-bold mb-2">
              Question: Have you been recently diagnosed with any terminal
              illness at the time of this application?{" "}
            </p>
            {errors.terminalIllness !== null &&
            touched.terminalIllness !== null ? (
              <p className="text-[red]">{errors.terminalIllness}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="terminalIllness"
                  value={option.value}
                  checked={terminalIllness === option.value}
                  onChange={() => {
                    setTerminalIllness(option.value);
                    void setFieldValue("terminalIllness", option.value);
                  }}
                  className="mr-2"
                />

                <label htmlFor={option.value} className="text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          {terminalIllness === "yes" && (
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div>
                  <label htmlFor="terminalIssueSpecify">Kindly Specify: </label>

                  <input
                    type="text"
                    id="terminalIssueSpecify"
                    name="terminalIssueSpecify"
                    value={values.terminalIssueSpecify}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.terminalIssueSpecify !== null &&
                  touched.terminalIssueSpecify !== null ? (
                    <p className="text-[red]">{errors.terminalIssueSpecify}</p>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          <div className="mb-6">
            <p className="text-gray-800 font-bold mb-2">
              Question: H&H has partnered with third-party medical services to
              ensure the health needs of their members are catered for. Would
              you like to receive more information regarding these programs?
            </p>
            {errors.moreInfo !== null && touched.moreInfo !== null ? (
              <p className="text-[red]">{errors.moreInfo}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="moreInfo"
                  value={option.value}
                  checked={moreInfo === option.value}
                  onChange={(event) => {
                    setMoreInfo(event.target.value);
                    void setFieldValue("moreInfo", event.target.value);
                  }}
                  className="mr-2"
                />

                <label htmlFor={option.value} className="text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Step8;
