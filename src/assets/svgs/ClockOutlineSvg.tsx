import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

export const ClockOutlineSvg = ({width, height, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.333 10c0 4.6-3.733 8.333-8.333 8.333A8.336 8.336 0 011.667 10C1.667 5.4 5.4 1.667 10 1.667S18.333 5.4 18.333 10z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.092 12.65l-2.583-1.542c-.45-.266-.817-.908-.817-1.433V6.258"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
