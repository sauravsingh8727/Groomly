'use client';

import React, { useState } from 'react';
import {
  faCaretDown,
  faStar,
  faStarOutline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/core';
import ReviewCard from '@/components/core/ReviewCard/ReviewCard';
import profile_img from '@public/assets/profile-img.png';
import { Footer } from '../(landing)/Footer';
import { Header } from '../(landing)/Header';

const reviewPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reviews = [
    {
      name: 'Brooklyn Fox',
      rating: '5.0',
      date: '14 Jan 2018',
      paragraph:
        'Very cozy and comfortable place. I will visit this studio as often as possible. Very cozy and cofortable place. I will visit this studio as often as possible. Very coz......',
    },
    {
      name: 'James Smith',
      rating: '5.0',
      date: '22 Mar 2019',
      paragraph:
        'Excellent experience! The atmosphere was relaxing and the staff was friendly.I will visit this studio as often as possible. Very coz......',
    },
    {
      name: 'Emma Johnson',
      rating: '4.0',
      date: '10 Dec 2020',
      paragraph:
        ' a good experience.Very coz......y and comfortable place. I will visit this studio as often as possible. I will visit this studio as often as possible. Very coz......',
    },
    {
      name: 'Emma Johnson',
      rating: '2.0',
      date: '10 Dec 2020',
      paragraph:
        'Nice place, but could use a bit more variety in their services. I will visit this studio as often as possible.   I will visit this studio as often as possible. Very coz......',
    },
  ];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-orange-500" />,
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarOutline}
            className="text-orange-500"
          />,
        );
      }
    }
    return stars;
  };
  const profileImage = '/assets/profile-img.png';
  return (
    <>
      <Header />
      <div className="main bg-gray-300 py-11">
        <div className="item-center container">
          <div className="top-title flex items-center justify-between">
            <h1 className="mb-6 text-center text-[1.75rem] uppercase leading-tight sm:text-[2.5rem] lg:text-[2.75rem]">
              REVIEWS
            </h1>
            <div className="relative mb-6">
              {/* Dropdown trigger */}
              <Button
                className="rounded-full bg-blue px-6 py-1 text-xs text-white hover:bg-blue lg:hidden"
                onClick={() => setIsOpen(!isOpen)}>
                All (45)
                <FontAwesomeIcon icon={faCaretDown} className="text-white" />
              </Button>

              {/* Dropdown content */}
              {isOpen && (
                <div className="text-grey absolute right-0 mt-2 w-40 rounded-lg bg-white px-3 shadow-lg">
                  {' '}
                  <ul>
                    <li className="border-grey-500 border-b px-4 py-2 hover:bg-gray-100">
                      5 <span> (38)</span>
                    </li>
                    <li className="border-grey-500 border-b px-4 py-2 hover:bg-gray-100">
                      4 <span> (45)</span>
                    </li>
                    <li className="border-grey-500 border-b px-4 py-2 hover:bg-gray-100">
                      3 <span> (2)</span>
                    </li>
                    <li className="border-grey-500 border-b px-4 py-2 hover:bg-gray-100">
                      2 <span> (0)</span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      1 <span> (0)</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Visible buttons for large screens */}
              <div className="hidden gap-2 lg:flex">
                <Button className="rounded-full bg-blue px-6 py-1 text-xs text-white hover:bg-blue">
                  All (45)
                </Button>
                <Button className="rounded-full bg-[#A6A7AB4D] px-6 py-1 text-xs text-gray-500 hover:bg-gray">
                  5 <span> (38)</span>
                </Button>
                <Button className="rounded-full bg-[#A6A7AB4D] px-6 py-1 text-xs text-gray-500 hover:bg-gray">
                  4 <span> (45)</span>
                </Button>
                <Button className="rounded-full bg-[#A6A7AB4D] px-6 py-1 text-xs text-gray-500 hover:bg-gray">
                  3 <span> (2)</span>
                </Button>
                <Button className="rounded-full bg-[#A6A7AB4D] px-6 py-1 text-xs text-gray-500 hover:bg-gray">
                  2 <span> (0)</span>
                </Button>
                <Button className="rounded-full bg-[#A6A7AB4D] px-6 py-1 text-xs text-gray-500 hover:bg-gray">
                  1 <span> (0)</span>
                </Button>
              </div>
            </div>
          </div>

          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              image={profileImage}
              name={review.name}
              rating={renderStars(Math.floor(review.rating))}
              date={review.date}
              paragraph={review.paragraph}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default reviewPage;
