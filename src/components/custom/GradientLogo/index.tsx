import React, {ReactNode} from 'react';
import {Box} from '@src/components/core';
import {LinearGradient} from '@src/components/core';
import {theme} from '@src/assets/themes/theme';

interface GradientButtonProps {
  icon?: string;
  size: number;
  xml: ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({size, xml}) => {
  return (
    <Box
      width={size}
      height={size}
      radius={size * 0.2}
      overflow="hidden"
      middle>
      <LinearGradient
        angle={-45}
        colorList={[
          {color: theme.colors.highlight2, offset: '0%', opacity: '1'},
          {color: theme.colors.highlight1, offset: '100%', opacity: '1'},
        ]}
      />
      <Box center>{xml}</Box>
    </Box>
  );
};
