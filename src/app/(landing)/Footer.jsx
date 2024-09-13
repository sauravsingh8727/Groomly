import React from 'react';

/**
 * Footer component
 *
 * @type {React.FC<HTMLProps>}
 */
export const Footer = (props) => {
  return (
    <footer className="flex flex-col items-center justify-between bg-[#D6D8D9] p-6 text-black sm:flex-row sm:px-12">
      {/* Column 1 */}
      <div className="flex flex-col items-center justify-center gap-2 p-4 sm:gap-4">
        <h1 className="text-sm sm:text-base">
          <a className="underline" href="">
            Manage Third Apps
          </a>
        </h1>
        <h1 className="text-sm sm:text-base">
          <a className="underline" href="">
            Delete Account
          </a>
        </h1>
      </div>
      {/* Column 2 */}
      <div className="flex flex-col items-center justify-center gap-2 p-4 sm:gap-4">
        <h1 className="text-sm sm:text-base">
          <a href="">Groomly Business</a>
        </h1>
        <h1 className="text-sm sm:text-base">
          <a href="">Privacy & Legal</a>
        </h1>
      </div>
    </footer>
  );
};
