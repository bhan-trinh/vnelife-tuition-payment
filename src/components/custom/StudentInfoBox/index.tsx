import React from 'react';
import {Box, Text} from '@src/components/core';
import {size} from '@src/utils/styles/size';
import {InfoHs} from '@src/data/receipt/InfoHs';

type StudentInfoBoxProps = {
  infoHs: InfoHs;
};

export const StudentInfoBox = ({infoHs}: StudentInfoBoxProps) => {
  return (
    <>
      <Box width={'100%'}>
        <Text size={size.xl} color={'black'} weight="bold" textAlign="left">
          Thông tin học sinh
        </Text>
      </Box>
      <Box row gap={10}>
        <Box>
          <Text size={size.m} color={'grey'}>
            Tên trường
          </Text>
        </Box>
        <Box flex={1}>
          <Text size={size.l} color={'black'} textAlign="right">
            {infoHs.ten_truong}
          </Text>
        </Box>
      </Box>
      <Box row gap={10}>
        <Box>
          <Text size={size.m} color={'grey'}>
            Mã định danh
          </Text>
        </Box>
        <Box flex={1}>
          <Text size={size.l} color={'black'} textAlign="right">
            {infoHs.lop_hoc_id}
          </Text>
        </Box>
      </Box>
      <Box row gap={10}>
        <Box>
          <Text size={size.m} color={'grey'}>
            Tên học sinh
          </Text>
        </Box>
        <Box flex={1}>
          <Text size={size.l} color={'black'} textAlign="right">
            {infoHs.ten_hoc_sinh}
          </Text>
        </Box>
      </Box>
      <Box row gap={10}>
        <Box>
          <Text size={size.m} color={'grey'}>
            Tên lớp
          </Text>
        </Box>
        <Box flex={1}>
          <Text size={size.l} color={'black'} textAlign="right">
            {infoHs.ten_lop}
          </Text>
        </Box>
      </Box>
    </>
  );
};
