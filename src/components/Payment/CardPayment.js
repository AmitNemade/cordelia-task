/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Button from "../Button";
import AmexIcon from "../../assets/svgs/card/amex.svg";
import MastercardIcon from "../../assets/svgs/card/mastercard.svg";
import RupayIcon from "../../assets/svgs/card/rupay.svg";
import XYZCardIcon from "../../assets/svgs/card/xyzcard.svg";
import VisaIcon from "../../assets/svgs/card/visa.svg";
import ErrorIcon from "../../assets/svgs/ErrorIcon.svg";
import InputField from "../InputField";

const CardPayment = ({ paymentData, onChange }) => {
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col items-start w-full">
      <div className="hidden text-xl font-bold lg:block">
        Enter your Card Details
      </div>
      <div className="flex flex-wrap items-center gap-1.5 lg:gap-2 lg:mt-6">
        <div className="flex items-center justify-center px-1.5 border rounded-md lg:px-2 h-8 lg:h-9 border-neutral-250">
          <img
            src={MastercardIcon}
            className="object-contain w-auto h-5 lg:h-6"
            alt="Select Mastercard"
          />
        </div>
        <div className="flex items-center justify-center px-1.5 border rounded-md lg:px-2 h-8 lg:h-9 border-neutral-250">
          <img
            src={AmexIcon}
            className="object-contain w-auto h-4 lg:h-5"
            alt="Select Amex"
          />
        </div>
        <div className="flex items-center justify-center px-1.5 border rounded-md lg:px-2 h-8 lg:h-9 border-neutral-250">
          <img
            src={XYZCardIcon}
            className="object-contain w-auto h-4 lg:h-5"
            alt="Select XYZ"
          />
        </div>
        <div className="flex items-center justify-center px-1.5 border rounded-md lg:px-2 h-8 lg:h-9 border-neutral-250">
          <img
            src={VisaIcon}
            className="object-contain w-auto h-2.5 lg:h-3"
            alt="Select Visa"
          />
        </div>
        <div className="flex items-center justify-center px-1.5 border rounded-md lg:px-2 h-8 lg:h-9 border-neutral-250">
          <img
            src={RupayIcon}
            className="object-contain w-auto h-2.5 lg:h-3"
            alt="Select Rupay"
          />
        </div>
      </div>
      <div className="flex items-start gap-2.5 mt-7 mb-6">
        <img
          src={ErrorIcon}
          className="object-contain w-auto h-5 lg:h-5"
          alt="Select Rupay"
        />
        <div className="text-sm">
          Please ensure your card is enabled for online transactions.{" "}
          <a
            href="#"
            alt="know more"
            className="inline-flex font-semibold text-primary"
          >
            <b>Know More</b>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-5">
        <InputField
          placeholder="Card Number"
          className="w-full h-11 lg:h-15"
          containerClass="col-span-full"
          error={error["card_number"]}
          onChange={(e) => {
            onChange({ name: "card_number", value: e.target.value });
          }}
        />
        <InputField
          placeholder="Expiry Date"
          className="h-11 lg:h-15"
          type="date"
          error={error["card_expiry"]}
          onChange={(e) => {
            onChange({ name: "card_expiry", value: e.target.value });
          }}
        />
        <InputField
          placeholder="CVV"
          className="h-11 lg:h-15"
          error={error["card_cvv"]}
          onChange={(e) => {
            onChange({ name: "card_cvv", value: e.target.value });
          }}
        />
        <InputField
          placeholder="Card Holder Name"
          className="h-11 lg:h-15"
          containerClass="col-span-full"
          error={error["card_holder_name"]}
          onChange={(e) => {
            onChange({ name: "card_holder_name", value: e.target.value });
          }}
        />
      </div>

      <Button
        className="w-full !text-base mt-7 lg:mt-12 h-11 lg:h-18"
        buttonStyle="solid"
        onClick={() => {
          const tempError = {};
          if ((paymentData["card_number"] ?? "").length === 0) {
            tempError["card_number"] = "Please enter your card number";
          }
          if ((paymentData["card_expiry"] ?? "").length === 0) {
            tempError["card_expiry"] = "Please enter your card expiry";
          }
          if ((paymentData["card_cvv"] ?? "").length === 0) {
            tempError["card_cvv"] = "Please enter your CVV number";
          }
          if ((paymentData["card_holder_name"] ?? "").length === 0) {
            tempError["card_holder_name"] = "Please enter your name on card";
          }
          setError(tempError);
          if (Object.keys(tempError).length === 0) {
            return;
          }
        }}
      >
        Proceed to Payment
      </Button>
    </div>
  );
};

export default CardPayment;
