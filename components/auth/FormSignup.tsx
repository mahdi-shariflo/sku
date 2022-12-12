import React, { useState } from "react";
import { signupData } from "../../typing";

import {
  FaUserCheck,
  FaUserGraduate,
  FaUserPlus,
} from "react-icons/fa";
import StepOne from "./StepOne";



const FormSignup = () => {
  const [step, setStep] = useState(0);


  return (
    <>
      <div className="flex justify-center w-full md:w-[50%] lg:w-[70%] md:mr-16 mt-16">
        <div className="w-full relative bg-[#0096f5] h-1">
          <div className="absolute -top-6 flex w-full justify-between items-center">
            <div className="step-level">
              <FaUserPlus className="text-white" />
            </div>
            <div className="step-level">
              <FaUserCheck className="text-gray-400/90" />
            </div>
            <div className="step-level">
              <FaUserGraduate className="text-gray-400/90" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[80%]">
         {step === 0 && <StepOne onSubmit={()=> console.log("yeessss")}/>}
      </div>
    </>
  );
};

export default FormSignup;
