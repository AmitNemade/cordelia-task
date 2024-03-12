/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CordeliaLogo from "../assets/svgs/cordelia.svg";
import OfferIcon from "../assets/svgs/offer.svg";
import MenuIcon from "../assets/svgs/menu.svg";
import Button from "./Button";
import { Menu } from "@headlessui/react";

const Header = () => {
  return (
    <Menu>
      <nav className="bg-white z-50 sticky top-0 flex items-center px-6 lg:h-[104px] h-14 shadow-[0_0_5px_0_rgba(0,0,0,0.06)] lg:shadow-[0_-6px_31px_0_rgba(0,0,0,0.12)]">
        <div className="m-auto  w-full gap-4 max-w-[1440px] flex justify-between items-center">
          <img
            src={CordeliaLogo}
            className="object-contain w-auto h-9 lg:h-14"
            alt="Cordelia logo"
          />
          <Menu.Button className="block lg:hidden">
            <img
              src={MenuIcon}
              className="object-contain w-5 h-5 "
              alt="Menu"
            />
          </Menu.Button>

          <ul className="items-center hidden gap-12 text-xl text-black lg:flex font-playfair">
            <li>
              <a href="#">
                <div className="flex items-center gap-2.5">
                  <img
                    src={OfferIcon}
                    className="object-contain w-6 h-6"
                    alt="Cordelia logo"
                  />
                  Offers
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="">Destinations</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="">Events</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="">Contact</div>
              </a>
            </li>
          </ul>
          <div className="items-center hidden gap-2 lg:flex">
            <Button buttonStyle="solid" className="px-6 h-13">
              Find a Cruise
            </Button>
            <Button buttonStyle="outline" className="px-6 h-13">
              Web Check-in
            </Button>
          </div>
        </div>
      </nav>
      <Menu.Items className="absolute flex flex-col w-full gap-2 px-6 shadow-[0_6px_10px_0_rgba(0,0,0,0.12)] pt-3 pb-6 bg-white items-start-center top-14">
        <Menu.Item>
          <a href="#" className="py-2 text-center hover:bg-primary/5">
            <div className="flex items-center justify-center gap-2.5">
              <img
                src={OfferIcon}
                className="object-contain w-6 h-6"
                alt="Cordelia logo"
              />
              Offers
            </div>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="#" className="py-2 text-center hover:bg-primary/5">
            Destinations
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="#" className="py-2 text-center hover:bg-primary/5">
            Events
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="#" className="py-2 text-center hover:bg-primary/5">
            Contact
          </a>
        </Menu.Item>
        <Menu.Item>
          <Button buttonStyle="solid" className="w-full px-6 h-13">
            Find a Cruise
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button buttonStyle="outline" className="w-full px-6 h-13">
            Web Check-in
          </Button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Header;
