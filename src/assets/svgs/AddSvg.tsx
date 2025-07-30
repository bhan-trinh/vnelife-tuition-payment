import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

export const AddSvg = ({width, height, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 41 41" fill="none">
      <Path
        d="M20.5 8.541v23.917M8.542 20.5h23.917"
        stroke={color ? color : '#E2623E'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
