import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

export const ReceiptSearchSvg = ({width, height, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <Path
        d="M21 11.3V7.04C21 3.01 20.06 2 16.28 2H8.72C4.94 2 4 3.01 4 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22.5 22l-1-1M8.5 7h8M9.5 11h6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
