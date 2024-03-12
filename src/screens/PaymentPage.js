import React from "react";
import Header from "../components/Header";
import BackIcon from "../assets/svgs/back.svg";
import PaymentTypeSelection from "../components/Payment/PaymentTypeSelection";
import JourneyDetails from "../components/Payment/JourneyDetails";
import PriceBreakup from "../components/Payment/PriceBreakup";

const PaymentPage = () => {
  return (
    <div className="relative w-full h-screen overflow-y-auto bg-white pb-7">
      <Header />
      <div className="flex flex-col items-start w-full px-6">
        <div className="flex w-full max-w-[1440px] mx-auto items-center gap-5 mb-8 text-xl font-semibold mt-7 lg:mb-14 lg:gap-8 lg:text-4xl font-playfair">
          <img
            src={BackIcon}
            className="object-contain w-5 h-5 cursor-pointer lg:w-7 lg:h-7"
            alt="Go back"
          />
          Select Payment Method
        </div>
        <div className="flex flex-col max-w-[1440px] w-full mx-auto justify-center gap-6 lg:flex-row lg:gap-8">
          <div className="flex order-2 w-full lg:order-1">
            <PaymentTypeSelection />
          </div>
          <div className="flex flex-col order-1 w-full max-w-lg gap-4 lg:gap-6 lg:order-2">
            <JourneyDetails />
            <PriceBreakup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
