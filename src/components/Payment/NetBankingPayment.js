/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Button from "../Button";
import AxisIcon from "../../assets/svgs/bank/axis.svg";
import BOBIcon from "../../assets/svgs/bank/bob.svg";
import HDFCIcon from "../../assets/svgs/bank/hdfc.svg";
import ICICIIcon from "../../assets/svgs/bank/icici.svg";
import SBIIcon from "../../assets/svgs/bank/sbi.svg";
import InputField from "../InputField";
import Dropdown from "../Dropdown";

const NetBankingPayment = ({ paymentData, onChange }) => {
  const [error, setError] = useState("");
  const options = [
    "ICICI Bank",
    "HDFC Bank",
    "Axis Bank",
    "State bank of India",
    "Bank of Baroda",
  ];
  return (
    <div className="flex flex-col items-start w-full">
      <div className="hidden text-xl font-bold lg:block">
        Enter your Card Details
      </div>
      <div className="flex flex-wrap items-center gap-1.5 lg:gap-2 lg:mt-9">
        <div className="flex gap-3 font-semibold text-[10px] text-sm items-center justify-center border rounded-md px-2 h-9 lg:h-9 border-neutral-250">
          <img
            src={ICICIIcon}
            className="object-contain w-auto h-5 lg:h-6"
            alt="Select ICICI"
          />
          ICICI Bank
        </div>
        <div className="flex gap-3 font-semibold text-[10px] text-sm items-center justify-center border rounded-md px-2 h-9 lg:h-9 border-neutral-250">
          <img
            src={HDFCIcon}
            className="object-contain w-auto h-5 lg:h-6"
            alt="Select HDFC"
          />
          HDFC Bank
        </div>
        <div className="flex gap-3 font-semibold text-[10px] text-sm items-center justify-center border rounded-md px-2 h-9 lg:h-9 border-neutral-250">
          <img
            src={AxisIcon}
            className="object-contain w-auto h-5 lg:h-6"
            alt="Select Axis Bank"
          />
          Axis Bank
        </div>
        <div className="flex gap-3 font-semibold text-[10px] text-sm items-center justify-center border rounded-md px-2 h-9 lg:h-9 border-neutral-250">
          <img
            src={SBIIcon}
            className="object-contain w-auto h-5 lg:h-6"
            alt="Select State bank of India"
          />
          State Bank of India
        </div>
        <div className="flex gap-3 font-semibold text-[10px] text-sm items-center justify-center border rounded-md px-2 h-9 lg:h-9 border-neutral-250">
          <img
            src={BOBIcon}
            className="object-contain w-auto h-5 lg:h-6"
            alt="Select Bank of Baroda"
          />
          Bank of Baroda Bank
        </div>
      </div>
      <Dropdown
        className="mt-6 col-span-full lg:mt-11"
        error={error}
        selectedValue={paymentData["bank"]}
        onSelect={(index) => {
          debugger;
          onChange({ name: "bank", value: index });
        }}
        options={options}
      />

      <Button
        className="w-full !text-base mt-7 lg:mt-12 h-11 lg:h-18"
        buttonStyle="solid"
        onClick={() => {
          debugger;
          if (
            paymentData["bank"] !== null ||
            paymentData["bank"] !== undefined
          ) {
            setError("Please select your bank.");
          }
        }}
      >
        Proceed to Payment
      </Button>
    </div>
  );
};

export default NetBankingPayment;
