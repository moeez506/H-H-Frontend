/* eslint-disable prettier/prettier */
import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import Button from "../../Button";

interface Option {
  label: string;
  value: string;
}

interface Step7Props {
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

interface Values {
  anyHealthIssue: string;
  specifyHealthIsuue?: string;
  recentTerminalIllness: string;
  specifyRecentTerminalIllness: string;
}

const Step7 = ({ currentStep, handleNextStep }: Step7Props) => {
  const [anyHealthIssue, setAnyHealthIssue] = useState<string | null>(null);
  const [specifyHealthIsuue, setSpecifyHealthIsuue] = useState("");
  const [recentTerminalIllness, setRecentTerminalIllness] = useState("");
  const [specifyRecentTerminalIllness, setSpecifyRecentTerminalIllness] =
    useState("");

  //   const { cameroonian, setCameroonian } = useContext(IndividualUserContext); // TODO: Change it when moeez make the context
  // TODO: Make the useEffect functionality
  const validationSchema = Yup.object({
    anyHealthIssue: Yup.string().required("This field is required"),
    specifyHealthIsuue:
      anyHealthIssue === "yes"
        ? Yup.string().required("Please mention the required field")
        : Yup.string().notRequired(),
    recentTerminalIllness: Yup.string().required("This field is required"),
    specifyRecentTerminalIllness:
      recentTerminalIllness === "yes"
        ? Yup.string().required("This field is required")
        : Yup.string().notRequired(),
  });

  const initialValues: Values = {
    anyHealthIssue: "",
    specifyHealthIsuue: "",
    recentTerminalIllness: "",
    specifyRecentTerminalIllness: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // TODO: Update the conditions based on when the user deSelect then which should also get remove.
      //   if (values.anyHealthIssue === "no") {
      //     values.specifyHealthIsuue = "";
      //   }
      //   if (values.recentTerminalIllness === "no") {
      //     values.specifyRecentTerminalIllness = "";
      //   }
      // setCameroonian(values); // TODO: Change it when moeez make the context
      console.log("🚀 ~ file: Step7.tsx:71 ~ Step7 ~ values:", values);
      handleNextStep(8);
    },
  });
  const { errors, touched, handleSubmit } = formik;

  return (
    <>
      <div className="bg-white shadow-md  rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto   desktop:text-2xl laptop:text-xl tabletOnly:text-lg mobile:text-base">
        <h1 className="text-3xl font-bold mb-6 text-center">Health Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <p className="text-gray-800 font-bold mb-2">
              Question: Do you have any pre-existing health issues that we
              should be aware of ?
            </p>
            {errors.anyHealthIssue !== null &&
            touched.anyHealthIssue !== null &&
            Object.prototype.hasOwnProperty.call(errors, "anyHealthIssue") &&
            Object.prototype.hasOwnProperty.call(touched, "anyHealthIssue") ? (
              <p className="text-[red]">{errors.anyHealthIssue}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="anyHealthIssue"
                  value={option.value}
                  checked={anyHealthIssue === option.value}
                  onChange={() => {
                    setAnyHealthIssue(option.value);
                    void formik.setFieldValue("anyHealthIssue", option.value);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={option.value}
                  className="text-gray-700"
                  onClick={() => {
                    setAnyHealthIssue(option.value);
                    void formik.setFieldValue("anyHealthIssue", option.value);
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {anyHealthIssue === "yes" && (
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <div>
                  <label htmlFor="specifyHealthIsuue">
                    Specify pre-existing health issue:
                  </label>
                  {errors.specifyHealthIsuue !== null &&
                  touched.specifyHealthIsuue !== null &&
                  Object.prototype.hasOwnProperty.call(
                    errors,
                    "specifyHealthIsuue"
                  ) &&
                  Object.prototype.hasOwnProperty.call(
                    touched,
                    "specifyHealthIsuue"
                  ) ? (
                    <p className="text-[red]">{errors.specifyHealthIsuue}</p>
                  ) : null}
                  <input
                    className="border rounded border-black"
                    type="text"
                    id="specifyHealthIsuue"
                    name="specifyHealthIsuue"
                    value={specifyHealthIsuue}
                    onChange={(event) => {
                      setSpecifyHealthIsuue(event.target.value);
                      void formik.setFieldValue(
                        "specifyHealthIsuue",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="mb-10">
            <p className="text-gray-800 font-bold mb-2">
              Question: Have you been recently diagnosed with any terminal
              illness at the time of this application?
            </p>
            {errors.recentTerminalIllness !== null &&
            touched.recentTerminalIllness !== null &&
            Object.prototype.hasOwnProperty.call(
              errors,
              "recentTerminalIllness"
            ) &&
            Object.prototype.hasOwnProperty.call(
              touched,
              "recentTerminalIllness"
            ) ? (
              <p className="text-[red]">{errors.recentTerminalIllness}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="recentTerminalIllness"
                  value={option.value}
                  checked={recentTerminalIllness === option.value}
                  onChange={() => {
                    setRecentTerminalIllness(option.value);
                    void formik.setFieldValue(
                      "recentTerminalIllness",
                      option.value
                    );
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={option.value}
                  className="text-gray-700"
                  onClick={() => {
                    setRecentTerminalIllness(option.value);
                    void formik.setFieldValue(
                      "recentTerminalIllness",
                      option.value
                    );
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {recentTerminalIllness === "yes" && (
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <div>
                  <label htmlFor="specifyRecentTerminalIllness">
                    Specify recent terminal illness:
                  </label>
                  {errors.specifyRecentTerminalIllness !== null &&
                  touched.specifyRecentTerminalIllness !== null &&
                  Object.prototype.hasOwnProperty.call(
                    errors,
                    "specifyRecentTerminalIllness"
                  ) &&
                  Object.prototype.hasOwnProperty.call(
                    touched,
                    "specifyRecentTerminalIllness"
                  ) ? (
                    <p className="text-[red]">
                      {errors.specifyRecentTerminalIllness}
                    </p>
                  ) : null}
                  <input
                    className="border rounded border-black"
                    type="text"
                    id="specifyRecentTerminalIllness"
                    name="specifyRecentTerminalIllness"
                    value={specifyRecentTerminalIllness}
                    onChange={(event) => {
                      setSpecifyRecentTerminalIllness(event.target.value);
                      void formik.setFieldValue(
                        "specifyRecentTerminalIllness",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <Button text="Next" isForm />
        </form>
      </div>
    </>
  );
};

export default Step7;
