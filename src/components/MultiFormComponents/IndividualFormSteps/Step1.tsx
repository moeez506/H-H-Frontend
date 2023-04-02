/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import Button from "../../Button";

interface Option {
  label: string;
  value: string;
}
interface Option1 {
  label: string;
  numVal: number;
}

interface Step1Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

const options: Option[] = [
  {
    label: "Just myself",
    value: "just_myself",
  },
  {
    label: "Register myself and 3 family members for free",
    value: "register_3_family_members",
  },
  {
    label: "Register myself and pay for additional members",
    value: "register_and_pay_additional_members",
  },
];

const familyMemberOptions: Option1[] = [
  {
    label: "1",
    numVal: 1,
  },
  {
    label: "2",
    numVal: 2,
  },
  {
    label: "3",
    numVal: 3,
  },
  {
    label: "4",
    numVal: 4,
  },
];

const Step1 = ({ currentStep, handleNextStep }: Step1Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedFamilyMemberCount, setSelectedFamilyMemberCount] = useState<
    number | null
  >(null);
  const { subscriptionPlan, setSubscriptionPlan } = useContext(
    IndividualUserContext
  );

  useEffect(() => {
    if ((subscriptionPlan as { joinOption: string }).joinOption !== undefined) {
      setSelectedOption(
        (subscriptionPlan as { joinOption: string }).joinOption
      );
      setSelectedFamilyMemberCount(
        (subscriptionPlan as { familyMemberCount: number }).familyMemberCount
      );
      handleOptionSelect(
        (subscriptionPlan as { joinOption: string }).joinOption
      );
      void formik.setFieldValue(
        "joinOption",
        (subscriptionPlan as { joinOption: string }).joinOption
      );
      handleFamilyMemberCountSelect(
        (subscriptionPlan as { familyMemberCount: number }).familyMemberCount
      );
      void formik.setFieldValue(
        "familyMemberCount",
        (subscriptionPlan as { familyMemberCount: number }).familyMemberCount
      );
    }
  }, [subscriptionPlan]);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);

    if (value !== "register_and_pay_additional_members") {
      setSelectedFamilyMemberCount(null);
    }
  };

  const handleFamilyMemberCountSelect = (value: number) => {
    setSelectedFamilyMemberCount(value);
  };

  const validationSchema = Yup.object().shape({
    joinOption: Yup.string().required("Please select answer"),
    familyMemberCount:
      selectedOption === "register_and_pay_additional_members"
        ? Yup.number().required(
          "Please select the number of members to pay for"
        )
        : Yup.string().notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      joinOption: "",
      familyMemberCount: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.joinOption !== "register_and_pay_additional_members") {
        values.familyMemberCount = "";
      }
      setSubscriptionPlan(values);
      handleNextStep(2);
    },
  });

  const { errors, touched, handleSubmit } = formik;

  return (
    <div className="bg-white shadow-md  rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto   desktop:text-2xl laptop:text-xl tabletOnly:text-lg mobile:text-base">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Plan</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 ">
          <p className="text-gray-800 font-bold mb-4">
            Question: I plan to join
          </p>
          {errors.joinOption !== null &&
            touched.joinOption !== null &&
            Object.prototype.hasOwnProperty.call(errors, "joinOption") &&
            Object.prototype.hasOwnProperty.call(touched, "joinOption") ? (
            <p className="text-[red]">{errors.joinOption}</p>
          ) : null}
          {options.map((option) => (
            <div key={option.value} className="flex items-center mb-6">
              <input
                type="radio"
                name="joinOption"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => {
                  handleOptionSelect(option.value);
                  void formik.setFieldValue("joinOption", option.value);
                }}
                className="mr-2"
              />
              <label
                htmlFor={option.value}
                className="text-gray-700"
                onClick={() => {
                  handleOptionSelect(option.value);
                  void formik.setFieldValue("joinOption", option.value);
                }}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {selectedOption === "register_and_pay_additional_members" && (
          <div className="mb-6  laptop:text-2xl tabletOnly:text-lg mobile:text-base ">
            <p className="text-gray-800 font-bold mb-4">
              Question: How many members will you pay for?
            </p>
            {errors.familyMemberCount !== null &&
              touched.familyMemberCount !== null &&
              Object.prototype.hasOwnProperty.call(errors, "familyMemberCount") &&
              Object.prototype.hasOwnProperty.call(
                touched,
                "familyMemberCount"
              ) ? (
              <p className="text-[red]">{errors.familyMemberCount}</p>
            ) : null}

            {familyMemberOptions.map((option) => (
              <div key={option.numVal} className="flex items-center mb-6">
                <input
                  type="radio"
                  name="familyMemberCount"
                  value={option.numVal}
                  checked={selectedFamilyMemberCount === option.numVal}
                  onChange={() => {
                    handleFamilyMemberCountSelect(option.numVal);
                    void formik.setFieldValue(
                      "familyMemberCount",
                      option.numVal
                    );
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={option.label}
                  className="text-gray-700"
                  onClick={() => {
                    handleFamilyMemberCountSelect(option.numVal);
                    void formik.setFieldValue(
                      "familyMemberCount",
                      option.numVal
                    );
                  }}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )}

        <Button text="Next" isForm />
      </form>
    </div>
  );
};

export default Step1;
