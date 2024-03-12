import { Disclosure } from "@headlessui/react";
import CouponBadge from "../../assets/svgs/coupon_badge.svg";
import React from "react";
import classNames from "classnames";

const PriceBreakup = () => {
  return (
    <div className="w-full bg-white rounded-md overflow-clip shadow-[0_1px_22px_0_rgba(0,0,0,0.06)] lg:shadow-[0_1px_18px_0_rgba(0,0,0,0.1)]">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full">
              <div className="flex items-center justify-between w-full px-5 py-4">
                <div className="text-lg lg:text-[22px] font-bold">
                  Price details
                </div>
                <div className="text-sm font-semibold lg:text-base text-theme-blue-400">
                  {open ? "Hide Price Breakup" : "Show Price Breakup"}
                </div>
              </div>
            </Disclosure.Button>
            <div className="w-full border-t border-theme-blue-100" />
            {open && (
              <>
                <div className="flex flex-col w-full gap-3 px-5 text-base font-semibold lg:text-lg pt-7 pb-9">
                  <div className="flex justify-between">
                    <div>Ocean View Cabin</div>
                    <div>₹ 18,260</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Mini Suite Cabin</div>
                    <div>₹18,260</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Service Charge & Levies</div>
                    <div>₹ 19,754</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Fuel Surcharge</div>
                    <div>₹ 4,980</div>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <div>
                      Kids sail offer{" "}
                      <img
                        src={CouponBadge}
                        className="inline-block ml-2.5 w-5 h-5"
                        alt="Open"
                      />
                    </div>
                    <div className="text-lg font-semibold">₹ 5,980</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-lg font-semibold">Sub-total</div>
                    <div className="text-lg font-semibold">₹ 58,384</div>
                  </div>
                </div>
                <div className="w-full border-t border-theme-blue-100" />
              </>
            )}
            <div
              className={classNames(
                "flex items-center justify-between gap-4 pt-5 pb-6 text-lg lg:text-[22px] font-semibold px-5 lg:px-7",
                open && "text-xl lg:text-3xl font-bold"
              )}
            >
              <div>Total Fare</div>
              <div className="text-primary">₹67,260</div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PriceBreakup;
