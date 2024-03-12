import { Menu, Transition } from "@headlessui/react";
import RightCaret from "../assets/svgs/RightCaret.svg";
import React, { Fragment } from "react";
import classNames from "classnames";

const Dropdown = ({
  onSelect,
  selectedValue,
  error,
  className = "",
  options,
}) => {
  return (
    <Menu
      as="div"
      className={classNames(
        "relative inline-block w-full text-left",
        className
      )}
    >
      <div className="w-full">
        <Menu.Button
          className={classNames(
            "flex items-center justify-between w-full p-6 px-4 py-2 text-sm font-medium border rounded-lg h-11 lg:h-15 border-neutral-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
            (options[selectedValue] ?? "").length === 0 && "text-black/80"
          )}
        >
          {({ open }) => (
            <>
              <div className="">{options[selectedValue] ?? "Select..."}</div>
              <img
                src={RightCaret}
                className={classNames(
                  "transition-all",
                  open ? "rotate-90" : "-rotate-90"
                )}
                alt="Open"
              />
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {options.map((option, index) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                      onSelect(index);
                    }}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
      {error && <div className="text-sm font-medium text-red-500">{error}</div>}
    </Menu>
  );
};

export default Dropdown;
