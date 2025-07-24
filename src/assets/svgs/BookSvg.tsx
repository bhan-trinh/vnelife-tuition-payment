import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './type';

export const BookSvg = ({width, height, color}: IconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 4.85v11.89c0 .97-.79 1.86-1.76 1.98l-.31.04c-1.64.22-3.95.9-5.81 1.68-.65.27-1.37-.22-1.37-.93V5.6c0-.37.21-.71.54-.89 1.83-.99 4.6-1.87 6.48-2.03h.06c1.2 0 2.17.97 2.17 2.17zM10.71 4.71c-1.83-.99-4.6-1.87-6.48-2.03h-.07c-1.2 0-2.17.97-2.17 2.17v11.89c0 .97.79 1.86 1.76 1.98l.31.04c1.64.22 3.95.9 5.81 1.68.65.27 1.37-.22 1.37-.93V5.6a1 1 0 00-.53-.89zM5 7.74h2.25a.749.749 0 110 1.5H5a.749.749 0 110-1.5zm3 4.5H5a.749.749 0 110-1.5h3a.749.749 0 110 1.5z"
        fill={color ? color : '#fff'}
      />
    </Svg>
  );
};
