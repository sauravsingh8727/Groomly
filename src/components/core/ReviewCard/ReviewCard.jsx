import React from 'react';

const ReviewCard = ({ image, name, rating, date, paragraph }) => {
  return (
    <div className="mx-auto mb-4 flex flex-col items-start justify-between gap-2 rounded-lg bg-white p-2 shadow-md">
      <div className="flex w-full items-start justify-between px-4">
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="image"
            className="mr-4 h-16 w-16 rounded-full object-cover"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-md font-semibold">{name}</h3>
            <div className="mt-1 flex items-center">
              <span className="text-orange-700">{rating}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <button className="text-[#646C71 ] mt-4 hidden rounded-full border-2 border-[#646C71] px-6 py-2 transition duration-300 hover:bg-gray-300 md:block">
          VIEW BOOKING
        </button>
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="md:10/12 w-full px-12 xl:w-11/12">
          <p className="text-md text-gray-700">
            {paragraph}
            <a className="cursor-pointer text-orange-400">Show more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
