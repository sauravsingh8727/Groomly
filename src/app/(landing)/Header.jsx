'use client';

import React, { useState } from 'react';
import {
  faBars,
  faBell,
  faCaretDown,
  faMessage,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, Image } from '@/components/core';
import { Logo } from '@/components/ui';
import profile_img from '@public/assets/profile-img.png';

export const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false); // State for mobile menu

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="md:12 z-20 flex h-24 items-center justify-between bg-blue p-12">
      <Anchor href="/">
        <Logo height={41} width={124} />
      </Anchor>

      {/* Hamburger Menu Button for Mobile */}

      {/* Navigation Links for Desktop */}
      <div className="ml-auto flex h-24 items-center justify-center gap-12 text-sm text-white">
        <Anchor
          className="flex h-full items-center border-b-2 border-[#ED6756] text-[#ED6756]"
          href="/"
          text="Home"
        />
        <Anchor
          className="flex h-full items-center"
          href="/bookings"
          text="Bookings"
        />
        <Anchor
          className="flex h-full items-center"
          href="/calender"
          text="Calender"
        />
        <Anchor
          className="flex h-full items-center"
          href="/reviewpage"
          text="Reviews"
        />
        <Anchor
          className="flex h-full items-center"
          href="/finance"
          text="Finance"
        />
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 left-0 top-24 z-30 transform bg-blue p-6 transition-transform duration-300 ease-in-out ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}>
        <ul className="flex flex-col gap-4">
          <li>
            <Anchor className="text-xl text-white" href="/home" text="Home" />
          </li>
          <li>
            <Anchor
              className="text-xl text-white"
              href="/bookings"
              text="Bookings"
            />
          </li>
          <li>
            <Anchor
              className="text-xl text-white"
              href="/calender"
              text="Calender"
            />
          </li>
          <li>
            <Anchor
              className="text-xl text-white"
              href="/reviewpage"
              text="Reviews"
            />
          </li>
          <li>
            <Anchor
              className="text-xl text-white"
              href="/finance"
              text="Finance"
            />
          </li>
        </ul>
      </div>

      {/* Notification Icons and Profile Dropdown */}
      <div className="ml-auto flex items-center gap-8 text-yellow-400">
        <FontAwesomeIcon
          className="text-xl text-white md:text-2xl"
          icon={faBell}
        />
        <FontAwesomeIcon
          className="text-xl text-white md:text-2xl"
          icon={faMessage}
        />

        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}>
            <Image
              src={profile_img}
              alt="Profile"
              className="h-8 w-8 rounded-full bg-transparent md:h-10 md:w-10"
            />
            <FontAwesomeIcon icon={faCaretDown} className="text-white" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded border border-gray-300 bg-white shadow-lg">
              <button
                className="z-9 block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  console.log('Logged out');
                }}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
      <button className="text-white md:hidden" onClick={toggleNav}>
        <FontAwesomeIcon icon={navOpen ? faTimes : faBars} size="lg" />
      </button>
    </header>
  );
};
