import React from 'react';
import { faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '../(landing)/Footer';
import { Header } from '../(landing)/Header';

const ChatListCard = ({ message, time, isUser }) => {
  return (
    <div className="w-full md:w-8/12">
      <div
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2 flex-wrap`}>
        <div
          className={`rounded-xl p-4 ${isUser ? 'bg-[#2B5166] text-white' : 'bg-[#F1F3F7] text-black'} flex w-full max-w-[230px] justify-center sm:max-w-[300px] md:max-w-[400px]`}>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <div
        className={`mx-2 flex ${isUser ? 'justify-end' : 'justify-start'} text-[10px] text-gray-500`}>
        {time}
      </div>
    </div>
  );
};

const ChatPage = () => {
  const chats = [
    { message: 'hahahahhaa thanks!', time: '06:58PM', isUser: false },
    {
      message:
        'The troubling things is there maybe a tenfold or even a hundredfold of stories inconsistent to theirs! Cmon.Let’s test it first. The troubling things is there maybe a tenfold or even a hundredfold of stories inconsistent to theirs! Cmon',
      time: '07:08PM',
      isUser: false,
    },
    {
      message:
        'There are numerous success stories it good on the internet. n the internet. you will hear aboun the internet. you will hear abouyou will hearyou will hear about business making it good on the internet. you will hear about business making...',
      time: '07:08PM',
      isUser: true,
    },
    {
      message:
        'hahahahhaa thanks! Let’s plan it for tomorrow. I have a few meetings tomorrow.',
      time: '10:12PM',
      isUser: false,
    },
    {
      message:
        'hahahahhaa thanks! Let’s plan it for tomorrow. I have a few meetings tomorrow.',
      time: '10:12PM',
      isUser: true,
    },
  ];

  return (
    <>
      <Header />
      <div className="container m-8 mx-auto bg-white p-2 text-black sm:px-8 md:px-12 lg:px-16">
        <p className="mx-2 hidden pb-10 text-gray-500 lg:flex">
          Home <span className="mx-2 text-gray-400">{' > '} Messages</span>
        </p>
        <div className="mb-4 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              MIAMI PAWS AND CAT...
            </h1>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-red-500 sm:text-base md:text-lg lg:text-xl">
              Booking
            </span>
          </div>
        </div>

        {/* Chat Box */}
        <div className="overflow-auto rounded-lg p-4">
          {chats.map((chat, index) => (
            <ChatListCard
              key={index}
              message={chat.message}
              time={chat.time}
              isUser={chat.isUser}
            />
          ))}
        </div>

        {/* Input Field */}
        <div className="mt-4 flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Write something"
              className="w-full rounded-full bg-[#ECEDEE] p-2 pr-10 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="absolute inset-y-0 right-3 flex items-center gap-2">
              <FontAwesomeIcon
                className="cursor-pointer text-gray-500 opacity-50"
                icon={faFaceSmile}
              />
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-600">
                <FontAwesomeIcon
                  className="rotate-45 cursor-pointer text-[#ffffff] opacity-50"
                  icon={faPaperPlane}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatPage;
