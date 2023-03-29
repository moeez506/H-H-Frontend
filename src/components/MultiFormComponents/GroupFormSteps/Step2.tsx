/* eslint-disable prettier/prettier */
import React, {useContext} from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";
interface Step2Props {
	currentStep: number;
	handleNextStep: (step: number) => void;
}

const Step2 = ({ currentStep, handleNextStep }: Step2Props) => {
  const {createGroup, setCreateGroup} = useContext(GroupUserContext)
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
    groupName: '',
    registerdMembers: 0,
    countryOfOperation: '',
    address: '',
    zipCode: '',
    cellNumber: '',
    email: '',
    website: '',
  };
  

  const validationSchema = Yup.object().shape({
    groupName: Yup.string().required('Group name is required'),
    registerdMembers: Yup.number()
      .required('Number of registered members is required')
      .min(1, 'Number of registered members must be at least 1'),
    countryOfOperation: Yup.string().required('Country of operation is required'),
    address: Yup.string().required('Address is required'),
    zipCode: Yup.string().max(5).min(5).required("Zip Code is required"),
    cellNumber: Yup.string().max(15).min(7).required("Cell Number is required"),
    email: Yup.string().email('Invalid email').required('Email is required'),
    website: Yup.string().url('Invalid URL').required('Website is required'),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        setCreateGroup(values)
        console.log("🚀 ~ file: step2.tsx:60 ~ Step2 ~ values:", values)
        handleNextStep(3);
      },
    }
  )

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="groupName">
          Association/Group Name
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
            {errors.groupName !== null && touched.groupName !== null ? (
            <p className="text-[red]">{errors.groupName}</p>
          ) : null}
        </div>   <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="registerdMembers">
          Number of Registered Members 
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
            {errors.registerdMembers !== null && touched.registerdMembers !== null ? (
            <p className="text-[red]">{errors.registerdMembers}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="countryOfOperation">
          Country of Operation
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
           {errors.countryOfOperation !== null && touched.countryOfOperation !== null ? (
            <p className="text-[red]">{errors.countryOfOperation}</p>
          ) : null}
        </div> 
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
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
           {errors.address !== null && touched.address !== null ? (
            <p className="text-[red]">{errors.address}</p>
          ) : null}
        </div><div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="zipCode">
          Zip Code
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
           {errors.zipCode !== null && touched.zipCode !== null ? (
            <p className="text-[red]">{errors.zipCode}</p>
          ) : null}
        </div><div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cellNumber">
            Cell Number
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
           {errors.cellNumber !== null && touched.cellNumber !== null ? (
            <p className="text-[red]">{errors.cellNumber}</p>
          ) : null}
        </div><div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
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
           {errors.email !== null && touched.email !== null ? (
            <p className="text-[red]">{errors.email}</p>
          ) : null}
        </div><div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="website">
          Website
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
           {errors.website !== null && touched.website !== null ? (
            <p className="text-[red]">{errors.website}</p>
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

export default Step2;
