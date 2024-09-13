'use client';

import React, { useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/core';
import ChatListCard from '@/components/core/chatListCard/chatListCard';
import { Footer } from '../(landing)/Footer';
import { Header } from '../(landing)/Header';

const ChatList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dataForChat = [
    {
      name: 'Miami Paws and cats',
      message:
        'Very cozy and comfortable place. I will visit this studio as often as possible.',
      image: '/assets/pet-shop.png',
      daysAgo: '1d',
      showBadge: true,
    },
    {
      name: 'Ocean Breeze Pets',
      message:
        'Excellent experience! The atmosphere was relaxing and the staff was friendly.',
      image: '/assets/pet-shop-2.jpeg',
      daysAgo: '2d',
      showBadge: false,
    },
    {
      name: 'Palm Paws & Feline Friends',
      message: 'A good experience. Very cozy and comfortable place.',
      image: '/assets/pet-shop-3.jpeg',
      daysAgo: '2d',
      showBadge: false,
    },
    {
      name: 'Key West Kittens',
      message: 'Nice place, but could use more variety in services.',
      image: '/assets/pet-shop.png',
      daysAgo: '4d',
      showBadge: false,
    },
    {
      name: 'Miami Paws and cats',
      message: 'Nice place, but could use more variety in services.',
      image: '/assets/pet-shop.png',
      daysAgo: '4d',
      showBadge: false,
    },
    {
      name: 'Key West Kittens',
      message: 'Nice place, but could use more variety in services.',
      image: '/assets/pet-shop.png',
      daysAgo: '4d',
      showBadge: false,
    },
    {
      name: 'Key West Kittens',
      message: 'Nice place, but could use more variety in services.',
      image: '/assets/pet-shop.png',
      daysAgo: '4d',
      showBadge: false,
    },
  ];

  return (
    <>
      <Header />
      <div className="main bg-gray-pale py-11">
        <div className="container">
          <p className="mx-2 pb-10 text-gray-500">
            Home <span className="mx-2 text-gray-400">{' > '}</span>Cancel
            Booking
          </p>
          <div className="top-title flex w-full items-center justify-center">
            <h1 className="mb-6 text-center text-[1.75rem] uppercase leading-tight sm:text-[2.5rem] lg:text-[2.75rem]">
              messages
            </h1>
          </div>

          <div className="chat-list">
            {dataForChat.map((chat, index) => (
              <ChatListCard
                key={index}
                name={chat.name}
                message={chat.message}
                image={chat.image}
                daysAgo={chat.daysAgo}
                showBadge={chat.showBadge}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatList;
