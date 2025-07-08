import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

export const ReceiptSvg = ({width, height, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M7.23 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C21 3.01 20.06 2 16.28 2H8.72C4.94 2 4 3.01 4 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4zM8.5 7h8M9.5 11h6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
