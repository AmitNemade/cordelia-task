import React, { useState } from "react";
import Button from "../Button";
import GpayIcon from "../../assets/svgs/upi/gpay.svg";
import PhonepeIcon from "../../assets/svgs/upi/phonepe.svg";
import PaytmIcon from "../../assets/svgs/upi/paytm.svg";
import BhimIcon from "../../assets/svgs/upi/bhim.svg";
import InputField from "../InputField";

const UpiPayment = ({ paymentData, onChange }) => {
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col items-start w-full">
      <div className="hidden text-xl font-bold lg:block">Pay using UPI</div>
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 lg:mt-10">
        <UpiBox imageSrc={GpayIcon} label={"Gpay"} />
        <UpiBox imageSrc={BhimIcon} label={"Bhim Upi"} />
        <UpiBox imageSrc={PhonepeIcon} label={"Bhim Phonepe"} />
        <UpiBox imageSrc={PaytmIcon} label={"Bhim Paytm"} />
      </div>
      <div className="mt-7 lg:mt-[50px] mb-5 lg:mb-9 w-full">
        <InputField
          placeholder="Enter UPI ID"
          value={paymentData["upi_id"]}
          name="upi_id"
          className="h-11 lg:h-15"
          error={error}
          onChange={(e) => {
            onChange({ name: "upi_id", value: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col items-start gap-3.5">
        <div className="flex items-start gap-2 lg:gap-2.5">
          <div className="bg-[#008CFF] lg:min-w-[24px] min-w-[14px] lg:min-h-[24px] min-h-[14px] w-3.5 h-3.5 rounded-full text-white flex items-center justify-center text-[10px] lg:text-xs font-bold">
            1
          </div>
          <div className="text-[10px] lg:text-sm font-semibold">
            Enter your UPI ID and click on Pay Now.
          </div>
        </div>
        <div className="flex items-start gap-2 lg:gap-2.5">
          <div className="bg-[#008CFF] lg:min-w-[24px] min-w-[14px] lg:min-h-[24px] min-h-[14px] w-3.5 h-3.5 rounded-full text-white flex items-center justify-center text-[10px] lg:text-xs font-bold">
            2
          </div>
          <div className="text-[10px] lg:text-sm font-semibold">
            You will receive a request from Payment Gateway in your UPI App.
          </div>
        </div>
        <div className="flex items-start gap-2 lg:gap-2.5">
          <div className="bg-[#008CFF] lg:min-w-[24px] min-w-[14px] lg:min-h-[24px] min-h-[14px] w-3.5 h-3.5 rounded-full text-white flex items-center justify-center text-[10px] lg:text-xs font-bold">
            3
          </div>
          <div className="text-[10px] lg:text-sm font-semibold">
            Login to UPI app by entering your mpin & authorize payment.
          </div>
        </div>
      </div>
      <Button
        className="w-full !text-base mt-7 lg:mt-12 h-11 lg:h-18"
        buttonStyle="solid"
        onClick={() => {
          debugger;
          if ((paymentData["upi_id"] ?? "").length === 0) {
            setError("Please enter your UPI id.");
          }
        }}
      >
        Proceed to Payment
      </Button>
    </div>
  );
};

const UpiBox = ({ imageSrc, label }) => {
  return (
    <div className="flex items-center justify-center px-2 border rounded-md cursor-pointer lg:px-3 h-9 lg:h-13 border-neutral-250">
      <img
        src={imageSrc}
        className="object-contain w-auto h-4 lg:h-6"
        alt={`Select ${label}`}
      />
    </div>
  );
};

export default UpiPayment;
