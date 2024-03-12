import React from "react";
import ShipIcon from "../../assets/svgs/ship.svg";
import BlueDownCaret from "../../assets/svgs/BlueDownCaret.svg";
import Amenities from "../../assets/svgs/amenities.svg";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";

const JourneyDetails = () => {
  return (
    <div className="border rounded-md bg-theme-blue-50 border-theme-blue-100 overflow-clip shadow-[0_1px_22px_0_rgba(0,0,0,0.06)] lg:shadow-[0_1px_18px_0_rgba(0,0,0,0.1)]">
      <div className="pt-8 px-5 lg:px-7 text-base lg:text-[22px] font-bold">
        Mumbai- At Sea- Mumbai
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex justify-between gap-4 px-5 py-5 lg:px-7">
              <div className="flex flex-col items-center w-full">
                <div className="text-sm font-bold">Feb 15, 2024</div>
                <div className="text-[10px] text-black/85 font-semibold">
                  Saturday 06:30 PM
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full">
                <div className="w-full h-0 border-t-2 border-[#939393] border-dashed">
                  &nbsp;
                </div>
                <div className="absolute top-auto bottom-auto left-auto right-auto flex items-center justify-center rounded-full w-7 h-7 bg-primary">
                  <img
                    src={ShipIcon}
                    className="object-contain w-4 h-4 m-auto"
                    alt="ship"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="text-sm font-bold">Feb 18, 2024</div>
                <div className="text-[10px] text-black/85 font-semibold">
                  Monday 10:00 AM
                </div>
              </div>
            </div>
            <div className="w-full border-t border-theme-blue-100" />
            {open && (
              <>
                <div className="flex justify-between w-full px-5 py-3 lg:px-7">
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex text-[10px] font-medium gap-1.5 items-center">
                      <img src={Amenities} className="w-6 h-6" alt="Open" />
                      CABIN 1
                    </div>
                    <div className="text-xs font-semibold">
                      Ocean View Cabin
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex text-[10px] font-medium gap-1.5 items-center">
                      <img src={Amenities} className="w-6 h-6" alt="Open" />
                      GUEST No
                    </div>
                    <div className="text-xs font-semibold text-primary">04</div>
                  </div>
                </div>
                <div className="w-full border-t border-theme-blue-100" />
                <div className="flex justify-between w-full px-5 py-3 lg:px-7">
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex text-[10px] font-medium gap-1.5 items-center">
                      <img src={Amenities} className="w-6 h-6" alt="Open" />
                      CABIN 1
                    </div>
                    <div className="text-xs font-semibold">
                      Ocean View Cabin
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex text-[10px] font-medium gap-1.5 items-center">
                      <img src={Amenities} className="w-6 h-6" alt="Open" />
                      GUEST No
                    </div>
                    <div className="text-xs font-semibold text-primary">04</div>
                  </div>
                </div>
                <div className="w-full border-t border-theme-blue-100" />
              </>
            )}
            <Disclosure.Button className="flex items-center justify-center w-full gap-3 py-4 text-sm font-bold bg-white text-theme-blue-400">
              {open ? "Hide Details" : "View Details"}{" "}
              <img
                src={BlueDownCaret}
                className={classNames("transition-all", open && "-rotate-180")}
                alt="Open"
              />
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default JourneyDetails;
