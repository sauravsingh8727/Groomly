'use client';

import { notFound } from 'next/navigation';
import { Anchor } from '@/components/core';
import { env } from '@/env';

const routes = [
  `/onboarding/business-details`,
  `/onboarding/phone-number`,
  `/onboarding/phone-number/verification`,
  `/onboarding/upload-docs`,
  `/onboarding/tax-details`,
  `/login`,
  `/reset-password`,
  `/signup`,
  `/privacy-policies`,
  `/terms-and-conditions`,
  `/`,
  `/%5Fsitemap`,
  `/partner-with-us`,
  '/reviewpage',
  '/chatpage',
  '/Chat-Details',
];

export default function Sitemap_Page() {
  if (env.NODE_ENV !== 'development') {
    return notFound();
  }
  return (
    <main className="p-10">
      <ul className="ml-6 list-disc [&_li]:mb-3 [&_ul]:ml-6 [&_ul]:list-disc">
        <Item href="/" text="ROOT" />
        <Item href="/partner-with-us" />
        <Item href="/login" />
        <Item href="/signup" />
        <Item href="/reviewpage" />
        <Item href="/chatpage" />
        <Item href="/Chat-Details" />
        <Item href="/profile/photos" />

        <Item text="onboarding" />

        <ul>
          <Item href="/onboarding/business-details" text="business-details" />
          <Item href="/onboarding/phone-number" text="phone-number" />
          <ul>
            <Item
              href="/onboarding/phone-number/verification"
              text="verification"
            />
          </ul>
          <Item href="/onboarding/upload-docs" text="upload-docs" />
          <Item href="/onboarding/tax-details" text="tax-details" />
        </ul>
      </ul>
    </main>
  );
}

/** @type {React.FC<{ href?: string; text?: string }>} */
const Item = ({ href, text }) => (
  <li>
    {href ? (
      <Anchor
        href={href}
        text={text ?? href?.replace(/^\//, '')}
        className="underline decoration-gray underline-offset-4"
      />
    ) : (
      text
    )}
  </li>
);
