/// <reference types="next" />
/// <reference types="next/image-types/global" />

import 'react';

// allow custom css props
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
