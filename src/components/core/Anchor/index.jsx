import React from 'react';
import Link from 'next/link';

/** @type {typeof import('./index.d.ts').isExternal} */
export function isExternal(href) {
  if (!href) return false;
  href = href.toString();
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(href);
}

/** @type {typeof import('./types.d.ts').Anchor} */
export const Anchor = React.forwardRef((props, ref) => {
  const { href, text, ...attr } = props;
  const _href = href.toString();
  const URLstring = _href?.replace(/https?\:\/+(www.)?/, '');

  if (isExternal(href) && !props.target) {
    attr.target = '_blank';
  }

  return (
    <Link href={_href} {...attr} ref={ref}>
      {props.children ?? text ?? URLstring}
    </Link>
  );
});
Anchor.displayName = 'Link';
