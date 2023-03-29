/* eslint-disable prettier/prettier */
import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";

interface Option {
  label: string;
  value: string;
}

interface Step1Props {
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
  CameroonianGroup: string;
  whereRegister?: string;
  tenMember: string;
  administrativeStructure: string;
  executiveMember: string;
}

const Step1 = ({ currentStep, handleNextStep }: Step1Props) => {
  const [CameroonianGroup, setCameroonianGroup] = useState<string | null>(null);
  const [registrationCountry, setRegistrationCountry] = useState("");
  const [tenMember, setTenMember] = useState("");
  const [administrativeStructure, setAdminstrativeStructure] = useState("");
  const [executiveMember, setExecutiveMember] = useState<string | null>(null);

  const { cameroonian, setCameroonian } = useContext(GroupUserContext);

  const validationSchema = Yup.object({
    CameroonianGroup: Yup.string().required("This field is required"),
    whereRegister:
      CameroonianGroup === "no"
        ? Yup.string().required("Please mention the required field")
        : Yup.string().notRequired(),
    tenMember: Yup.string().required("This field is required"),
    administrativeStructure: Yup.string().required("This field is required"),
    executiveMember: Yup.string().required("This field is required"),
  });

  const initialValues: Values = {
    CameroonianGroup: "",
    whereRegister: "",
    tenMember: "",
    administrativeStructure: "",
    executiveMember: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setCameroonian(values);
      console.log("🚀 ~ file: step1.tsx:71 ~ Step1 ~ values:", values);
      handleNextStep(2);
    },
  });
  const { errors, touched, handleSubmit } = formik;

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto   desktop:text-2xl laptop:text-xl tabletOnly:text-lg mobile:text-base">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Cameroonian Group
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <p className="text-gray-800 font-bold mb-2">
              Question: This Group/Association is a Cameroonian Group ?
            </p>
            {errors.CameroonianGroup !== null &&
            touched.CameroonianGroup !== null &&
            Object.prototype.hasOwnProperty.call(errors, "CameroonianGroup") &&
            Object.prototype.hasOwnProperty.call(
              touched,
              "CameroonianGroup"
            ) ? (
              <p className="text-[red]">{errors.CameroonianGroup}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="CameroonianGroup"
                  value={option.value}
                  checked={CameroonianGroup === option.value}
                  onChange={() => {
                    setCameroonianGroup(option.value);
                    void formik.setFieldValue("CameroonianGroup", option.value);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={option.value}
                  className="text-gray-700"
                  onClick={() => {
                    setCameroonianGroup(option.value);
                    void formik.setFieldValue("CameroonianGroup", option.value);
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {CameroonianGroup === "no" && (
            <div className="mb-10">
              <div className="flex items-center mb-2">
                <div>
                  <label htmlFor="whereRegister">
                    Where is this group register?{" "}
                  </label>
                  {errors.whereRegister !== null &&
                  touched.whereRegister !== null &&
                  Object.prototype.hasOwnProperty.call(
                    errors,
                    "whereRegister"
                  ) &&
                  Object.prototype.hasOwnProperty.call(
                    touched,
                    "whereRegister"
                  ) ? (
                    <p className="text-[red]">{errors.whereRegister}</p>
                  ) : null}
                  <input
                    className="border rounded border-black"
                    type="text"
                    id="whereRegister"
                    name="whereRegister"
                    value={registrationCountry}
                    onChange={(event) => {
                      setRegistrationCountry(event.target.value);
                      void formik.setFieldValue(
                        "whereRegister",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {CameroonianGroup === "yes" && (
            <div className="mb-10">
              <p className="text-gray-800 font-bold mb-2">
                Question: This Association or Group has 10 or more members ?
              </p>
              {errors.tenMember !== null &&
              touched.tenMember !== null &&
              Object.prototype.hasOwnProperty.call(errors, "tenMember") &&
              Object.prototype.hasOwnProperty.call(touched, "tenMember") ? (
                <p className="text-[red]">{errors.tenMember}</p>
              ) : null}
              {options.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="tenMember"
                    value={option.value}
                    checked={tenMember === option.value}
                    onChange={() => {
                      setTenMember(option.value);
                      void formik.setFieldValue("tenMember", option.value);
                    }}
                    className="mr-2"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-gray-700"
                    onClick={() => {
                      setTenMember(option.value);
                      void formik.setFieldValue("tenMember", option.value);
                    }}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}

          {CameroonianGroup === "yes" && (
            <div className="mb-10">
              <p className="text-gray-800 font-bold mb-2">
                Question:This group has an administrative structure (President
                ,Vice president etc )?{" "}
              </p>
              {errors.administrativeStructure !== null &&
              touched.administrativeStructure !== null &&
              Object.prototype.hasOwnProperty.call(
                errors,
                "administrativeStructure"
              ) &&
              Object.prototype.hasOwnProperty.call(
                touched,
                "administrativeStructure"
              ) ? (
                <p className="text-[red]">{errors.administrativeStructure}</p>
              ) : null}
              {options.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="administrativeStructure"
                    value={option.value}
                    checked={administrativeStructure === option.value}
                    onChange={() => {
                      setAdminstrativeStructure(option.value);
                      void formik.setFieldValue(
                        "administrativeStructure",
                        option.value
                      );
                    }}
                    className="mr-2"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-gray-700"
                    onClick={() => {
                      setAdminstrativeStructure(option.value);
                      void formik.setFieldValue(
                        "administrativeStructure",
                        option.value
                      );
                    }}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {CameroonianGroup === "yes" && (
            <div className="mb-10">
              <p className="text-gray-800 font-bold mb-2">
                Question: Are you an executive member, or have you been
                delegated powers or appointed to register this group or
                association with H&H?
              </p>
              {errors.executiveMember !== null &&
              touched.executiveMember !== null &&
              Object.prototype.hasOwnProperty.call(errors, "executiveMember") &&
              Object.prototype.hasOwnProperty.call(
                touched,
                "executiveMember"
              ) ? (
                <p className="text-[red]">{errors.executiveMember}</p>
              ) : null}
              {options.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="executiveMember"
                    value={option.value}
                    checked={executiveMember === option.value}
                    onChange={() => {
                      setExecutiveMember(option.value);
                      void formik.setFieldValue(
                        "executiveMember",
                        option.value
                      );
                    }}
                    className="mr-2"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-gray-700"
                    onClick={() => {
                      setExecutiveMember(option.value);
                      void formik.setFieldValue(
                        "executiveMember",
                        option.value
                      );
                    }}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Step1;
