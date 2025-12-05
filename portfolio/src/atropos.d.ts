declare module 'atropos/react' {
  import { FC, ReactNode } from 'react';

  interface AtroposProps {
    children?: ReactNode;
    className?: string;
    activeOffset?: number;
    shadowScale?: number;
    shadowOffset?: number;
    duration?: number;
    rotate?: boolean;
    rotateTouch?: boolean | 'scroll-y' | 'scroll-x';
    rotateXMax?: number;
    rotateYMax?: number;
    rotateXInvert?: boolean;
    rotateYInvert?: boolean;
    stretchX?: number;
    stretchY?: number;
    stretchZ?: number;
    commonOrigin?: boolean;
    shadow?: boolean;
    highlight?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
    onRotate?: (x: number, y: number) => void;
    alwaysActive?: boolean;
    innerClassName?: string;
    scaleClassName?: string;
    rotateClassName?: string;
  }

  const Atropos: FC<AtroposProps>;
  export default Atropos;
}

declare module 'atropos/css' {
  const content: string;
  export default content;
}

