import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

export const ChevronRightSvg = ({width, height, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 6 8" fill="none">
      <Path
        d="M1.5 7l3-3-3-3"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
