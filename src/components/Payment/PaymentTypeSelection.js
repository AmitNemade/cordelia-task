import classNames from "classnames";
import React, { useState } from "react";
import UpiIcon from "../../assets/svgs/upi.svg";
import CardIcon from "../../assets/svgs/card.svg";
import NetBankingIcon from "../../assets/svgs/netbanking.svg";
import RightCaret from "../../assets/svgs/RightCaret.svg";
import { Disclosure } from "@headlessui/react";
import UpiPayment from "./UpiPayment";
import CardPayment from "./CardPayment";
import NetBankingPayment from "./NetBankingPayment";

const PaymentTypeSelection = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState("upi");
  const [paymentData, setPaymentData] = useState({});

  const onChange = ({ name, value }) => {
    debugger;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-start w-full gap-6">
      <div className="flex text-xl font-semibold lg:hidden font-playfair">
        Payment Options
      </div>
      <div className="bg-white lg:gap-9 w-full rounded-md lg:px-8 p-0 lg:py-9 shadow-[0_1px_22px_0_rgba(0,0,0,0.06)] lg:shadow-[0_1px_18px_0_rgba(0,0,0,0.1)] flex">
        <div className="flex flex-col w-full rounded-l-md overflow-clip max-w-80">
          <Disclosure>
            <Disclosure.Button>
              {({ open }) => (
                <PaymentTypeBox
                  isSelected={selectedPaymentType === "upi"}
                  imageSrc={UpiIcon}
                  label="UPI Options"
                  description="Pay Directly from Your Bank Account"
                  onSelect={() => setSelectedPaymentType("upi")}
                  isOpen={open}
                />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 lg:hidden">
              <UpiPayment onChange={onChange} paymentData={paymentData} />
            </Disclosure.Panel>
          </Disclosure>

          <div className="w-full border border-[#DDE7F1] lg:border-neutral-250" />
          <Disclosure>
            <Disclosure.Button>
              {({ open }) => (
                <PaymentTypeBox
                  isSelected={selectedPaymentType === "card"}
                  imageSrc={CardIcon}
                  label="Debit/Credit Card"
                  description="Visa, MasterCard, AMEX, Rupay and Dinnerclub"
                  onSelect={() => setSelectedPaymentType("card")}
                  isOpen={open}
                />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 lg:hidden">
              <CardPayment onChange={onChange} paymentData={paymentData} />
            </Disclosure.Panel>
          </Disclosure>

          <div className="w-full border border-[#DDE7F1] lg:border-neutral-250" />
          <Disclosure>
            <Disclosure.Button>
              {({ open }) => (
                <PaymentTypeBox
                  isSelected={selectedPaymentType === "netbanking"}
                  imageSrc={NetBankingIcon}
                  label="NetBanking"
                  description="All Major banks Available"
                  onSelect={() => setSelectedPaymentType("netbanking")}
                  isOpen={open}
                />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 lg:hidden">
              <NetBankingPayment
                onChange={onChange}
                paymentData={paymentData}
              />
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="hidden lg:flex">
          {selectedPaymentType === "upi" && (
            <UpiPayment onChange={onChange} paymentData={paymentData} />
          )}
          {selectedPaymentType === "card" && (
            <CardPayment onChange={onChange} paymentData={paymentData} />
          )}
          {selectedPaymentType === "netbanking" && (
            <NetBankingPayment onChange={onChange} paymentData={paymentData} />
          )}
        </div>
      </div>
    </div>
  );
};

const PaymentTypeBox = ({
  isSelected,
  imageSrc,
  label,
  description,
  onSelect,
  isOpen,
}) => {
  return (
    <div
      className={classNames(
        "flex px-3 py-3.5 lg:p-6 gap-2.5 items-center cursor-pointer",
        isSelected
          ? "bg-white border-0 lg:border-l-[6px] border-primary"
          : "bg-white lg:bg-neutral-100"
      )}
      onClick={() => onSelect()}
    >
      <div className="flex item-start gap-2.5 w-full">
        <img
          src={imageSrc}
          className="object-contain h-7 lg:h-8 w-7"
          alt={`Select ${label}`}
        />
        <div className="flex flex-col items-start w-full gap-2 text-left text-black lg:mt-2">
          <div className="text-xs font-bold leading-none lg:text-base">
            {label}
          </div>
          <div className="text-[10px] lg:text-sm font-medium leading-tight">
            {description}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <img
          src={RightCaret}
          className={classNames(
            "block lg:hidden transition-all",
            isOpen && "rotate-90"
          )}
          alt="Open"
        />
      </div>
    </div>
  );
};

export default PaymentTypeSelection;
