import {BankSvg} from '@src/assets/svgs/BankSvg';
import {CarOutlineSvg} from '@src/assets/svgs/CarOutlineSvg';
import {DocumentSvg} from '@src/assets/svgs/DocumentSvg';
import {HandCoinsSvg} from '@src/assets/svgs/HandCoinsSvg';
import {HouseOutlineSvg} from '@src/assets/svgs/HouseOutlineSvg';
import {ScaleSvg} from '@src/assets/svgs/ScaleSvg';
import {ShieldPlusSvg} from '@src/assets/svgs/ShieldPlusSvg';
import React from 'react';

const iconAttributes = {
  width: 25,
  height: 25,
  color: '#0095B3',
};

export const servicesList = [
  {
    icon: <CarOutlineSvg {...iconAttributes} />,
    title: 'Phạt nguội',
    notif: 1,
  },
  {
    icon: <HouseOutlineSvg {...iconAttributes} />,
    title: 'Đất đai',
  },
  {
    icon: <ScaleSvg {...iconAttributes} />,
    title: 'Án phí',
    notif: 3,
  },
  {
    icon: <ShieldPlusSvg {...iconAttributes} />,
    title: 'Viện phí',
  },
  {
    icon: <BankSvg {...iconAttributes} />,
    title: 'Vi phạm hành chính',
  },
  {
    icon: <DocumentSvg {...iconAttributes} />,
    title: 'Nộp thuế, lệ phí',
  },
  {
    icon: <HandCoinsSvg {...iconAttributes} />,
    title: 'Phí, lệ phí DVC',
  },
];
