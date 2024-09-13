import React from 'react';
import Image from 'next/image';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '@/app/(landing)/Footer';
import { Header } from '@/app/(landing)/Header';

const photosData = [
  {
    id: 1,
    name: 'Luna',
    date: 'July 19, 2020',
    imageUrl: '/assets/puppy.jpeg',
  },
  {
    id: 2,
    name: 'Ammo',
    date: 'July 19, 2020',
    imageUrl: '/assets/caty.jpeg',
  },
  {
    id: 3,
    name: 'Luna',
    date: 'July 19, 2020',
    imageUrl: '/assets/dog.jpeg',
  },
  {
    id: 4,
    name: 'Luna',
    date: 'July 19, 2020',
    imageUrl: '/assets/puppy.jpeg',
  },
  {
    id: 5,
    name: 'Luna',
    date: 'July 19, 2020',
    imageUrl: '/assets/caty.jpeg',
  },
  {
    id: 6,
    name: 'Luna',
    date: 'July 19, 2020',
    imageUrl: '/assets/dog.jpeg',
  },
];

const Photos = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container mx-auto max-w-6xl p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Home &gt; <span className="text-gray-900">Photos</span>
          </div>
          <button className="text-sm font-semibold text-red-500">Add</button>
        </div>

        <h1 className="my-6 text-4xl font-bold">PHOTOS (12)</h1>

        <div className="grid grid-cols-3 gap-6">
          {photosData.map((photo, index) => (
            <div key={index} className="relative">
              <div className="aspect-square w-full">
                <Image
                  src={photo.imageUrl}
                  alt={photo.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200 bg-slate-300">
                <span className="text-white">
                  <FontAwesomeIcon icon={faTrash} />{' '}
                </span>
              </div>
              <div className="mt-2 flex text-center">
                <p className="text-sm font-semibold">{photo.name}</p>
                <p className="text-xs text-gray-500">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Photos;
