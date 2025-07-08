import {CarOutlineSvg} from '@src/assets/svgs/CarOutlineSvg';
import {ScaleSvg} from '@src/assets/svgs/ScaleSvg';
import React from 'react';

const iconAttributes = {
  width: 25,
  height: 25,
  color: '#0095B3',
};

export const receiptList = [
  {
    icon: <CarOutlineSvg {...iconAttributes} />,
    title: 'Nộp phạt vi phạm giao thông (Phạt nguội)',
    id: 'LTB98342587',
    date: '30/12/2023 15:52:50',
    dueDate: 'Còn 10 ngày',
    amount: 10000000,
  },
  {
    icon: <ScaleSvg {...iconAttributes} />,
    title: 'Thanh toán nghĩa vụ tài chính về đất đai',
    id: 'ASDKLNAF',
    date: '30/12/2023 15:52:50',
    dueDate: 'Còn 10 ngày',
    amount: 10000000,
  },
  {
    icon: <CarOutlineSvg {...iconAttributes} />,
    title: 'Nộp phạt vi phạm giao thông (Phạt nguội)',
    id: 'SJKDA8232',
    date: '30/12/2023 15:52:50',
    dueDate: 'Còn 10 ngày',
    amount: 10000000,
  },
];
