import React from 'react';

const ChatListCard = ({ image, name, message, daysAgo, showBadge }) => {
  return (
    <div className="mb-4 flex flex-col items-start justify-between gap-2 rounded-lg bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#ED67560D]">
      {' '}
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center">
          <img
            src={image}
            alt="profile"
            className="mr-4 h-12 w-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-black">{name}</h3>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {showBadge && (
            <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#ED6756] text-white">
              3
            </span>
          )}
          <span className="text-sm text-gray-500">{daysAgo}</span>
        </div>
      </div>
      <div className="flex-start flex w-full">
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default ChatListCard;
