/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
interface Option {
  label: string;
  value: string;
}

interface Step2Props {
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

const Step2 = ({ currentStep, handleNextStep }: Step2Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectNationality, setSelectNationality] = useState("");
  const [liveInCamericon, setliveInCamericon] = useState("");
  const [relationCameroonian, setRelationCamericon] = useState("");
  const { cameroonian, setCameroonian } = useContext(IndividualUserContext);

  const validationSchema = Yup.object().shape({
    joinOption: Yup.string().required("Please select an option"),
    nationality:
      selectedOption === "no"
        ? Yup.string().required("Nationality is required")
        : Yup.string().notRequired(),
    livesInCameroon:
      selectedOption === "no"
        ? Yup.string().required("Please select an option")
        : Yup.string().notRequired(),
    relationCameroonian:
      liveInCamericon === "no"
        ? Yup.string().required("Please select an option")
        : Yup.string().notRequired(),
  });

  //TODO disbale next when not eliglble

  const formik = useFormik({
    initialValues: {
      joinOption: "",
      nationality: "",
      livesInCameroon: "",
      relationCameroonian: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setCameroonian(values);
      // console.log("🚀 ~ file: step2.tsx:57 ~ Step2 ~ values:", values)
      handleNextStep(3);
    },
  });
  const { errors, touched, handleSubmit } = formik;

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto w-full desktop:text-2xl laptop:text-xl tabletOnly:text-lg mobile:text-base">
        <h1 className="text-3xl font-bold mb-6 text-center">Locality</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="text-gray-800 font-bold mb-2">
              Question: Are you a Cameroonian?{" "}
            </p>
            {errors.joinOption !== null &&
            touched.joinOption !== null &&
            Object.prototype.hasOwnProperty.call(errors, "joinOption") &&
            Object.prototype.hasOwnProperty.call(touched, "joinOption") ? (
              <p className="text-[red]">{errors.joinOption}</p>
            ) : null}
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="joinOption"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => {
                    setSelectedOption(option.value);
                    void formik.setFieldValue("joinOption", option.value);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={option.value}
                  className="text-gray-700"
                  onClick={() => {
                    setSelectedOption(option.value);
                    void formik.setFieldValue("joinOption", option.value);
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {selectedOption === "no" && (
            <div className="mb-6 d">
              <div className="flex items-center mb-2">
                <div>
                  <label htmlFor="nationality">Country of Nationality ?</label>
                  {errors.nationality !== null &&
                  touched.nationality !== null &&
                  Object.prototype.hasOwnProperty.call(errors, "nationality") &&
                  Object.prototype.hasOwnProperty.call(
                    touched,
                    "nationality"
                  ) ? (
                    <p className="text-[red]">{errors.nationality}</p>
                  ) : null}
                  <input
                    className="border rounded border-black"
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={selectNationality}
                    onChange={(event) => {
                      setSelectNationality(event.target.value);
                      void formik.setFieldValue(
                        "nationality",
                        event.target.value
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {selectedOption === "no" && (
            <div className="mb-6 ">
              <p className="text-gray-800 font-bold mb-2">
                Question: Do you currently live in Cameroon ?{" "}
              </p>
              {errors.livesInCameroon !== null &&
              touched.livesInCameroon !== null &&
              Object.prototype.hasOwnProperty.call(errors, "livesInCameroon") &&
              Object.prototype.hasOwnProperty.call(
                touched,
                "livesInCameroon"
              ) ? (
                <p className="text-[red]">{errors.livesInCameroon}</p>
              ) : null}
              {options.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="livesInCameroon"
                    value={option.value}
                    checked={liveInCamericon === option.value}
                    onChange={() => {
                      setliveInCamericon(option.value);
                      void formik.setFieldValue(
                        "livesInCameroon",
                        option.value
                      );
                    }}
                    className="mr-2"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-gray-700"
                    onClick={() => {
                      setliveInCamericon(option.value);
                      void formik.setFieldValue(
                        "livesInCameroon",
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
          {liveInCamericon === "no" && (
            <div className="mb-6 ">
              <p className="text-gray-800 font-bold mb-2">
                Question: Do you have any relation who is a Cameroonian ?
              </p>
              {errors.relationCameroonian !== null &&
              touched.relationCameroonian !== null &&
              Object.prototype.hasOwnProperty.call(
                errors,
                "relationCameroonian"
              ) &&
              Object.prototype.hasOwnProperty.call(
                touched,
                "relationCameroonian"
              ) ? (
                <p className="text-[red]">{errors.relationCameroonian}</p>
              ) : null}
              {options.map((option) => (
                <div key={option.value} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="relationCameroonian"
                    value={option.value}
                    checked={relationCameroonian === option.value}
                    onChange={() => {
                      setRelationCamericon(option.value);
                      void formik.setFieldValue(
                        "relationCameroonian",
                        option.value
                      );
                    }}
                    className="mr-2"
                  />
                  <label
                    htmlFor={option.value}
                    className="text-gray-700"
                    onClick={() => {
                      setRelationCamericon(option.value);
                      void formik.setFieldValue(
                        "relationCameroonian",
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
          {relationCameroonian === "no" && (
            <div className="mb-6 ">
              <p className="text-gray-800 font-bold mb-2">
                At this time your application do not meet eligibility criteria .
                please contact us for more information at
                registration@holdinghandscommunitynetwork .{" "}
              </p>
            </div>
          )}
          <button
            type="submit"
            className={
              relationCameroonian === "no"
                ? "hidden"
                : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            }
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Step2;
