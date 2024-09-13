import React from 'react';
import Image from 'next/image';
import { cn } from '@/components/utils';
import IPhone from '@public/ui/iphone.png';
import style from './style.module.scss';

/**
 * Phone Mockup component
 *
 * @type {React.FC<import('next/image').ImageProps>}
 */
export const Mockup = ({ className, ...props }) => {
  return (
    <div className={cn('relative shrink-0', style.mockup, className)}>
      <Image
        src={IPhone}
        alt="iphone-mockup"
        className={cn(style.mockup_image)}
        height={590}
        width={297}
        sizes="(min-width:96rem) 16vw, (min-width:80rem) 20vw, (min-width:64rem) 25vw, (min-width:48rem) 33vw, (min-width:40rem) 40vw, 90vw"
      />
      <Image
        {...props}
        className={cn('absolute z-2', style.mockup_screen)}
        height={557}
        width={256}
        sizes="(min-width:96rem) 16vw, (min-width:80rem) 20vw, (min-width:64rem) 25vw, (min-width:48rem) 33vw, (min-width:40rem) 40vw, 90vw"
        alt={props.alt}
      />
    </div>
  );
};
