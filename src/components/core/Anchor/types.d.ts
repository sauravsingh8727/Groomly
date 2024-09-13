import { UrlObject } from 'node:url';
import { Route } from 'next';
import { LinkProps } from 'next/link';

export function isExternal(href: string | UrlObject): boolean;

export type AnchorProps = React.HTMLProps<HTMLAnchorElement> &
  LinkProps<Route> & {
    text?: React.ReactNode;
  };

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>();
