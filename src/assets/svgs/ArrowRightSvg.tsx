import {IconProps} from '@src/assets/svgs/type';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowRightSvg = ({
  width = 16,
  height = 16,
  color = '#FFFFFF',
}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M9.62 3.953L13.667 8 9.62 12.046M2.333 8h11.22"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default React.memo(ArrowRightSvg);
