import React, {useState} from 'react';
import {Box, Input, Text} from '@src/components/core';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
// import Icon from '@react-native-vector-icons/material-design-icons';
import {size} from '@src/common/styles/size';
import {IconBox} from '../IconBox';
import {tuitionServiceList} from '@src/data/TuitionServiceData/tuitionServiceList';
import {removeTone} from '@src/common/func/removeTone';
import {tuitionServiceImages} from '@src/assets/imgComponents/imgComponents';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LookUpScreenProps} from '@src/screens/OrtherScreen/LookUpScreen/LookUpScreen';
import {HomeScreenProps} from '@src/screens/HomeScreen';
import {RootStackParamList} from '@src/navigation/types';

export const ServicePanel = ({servicesList}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [searchWord, setSearchWord] = useState('');
  try {
    return (
      <Box flex={5} gap={10}>
        <Text size={size.xl} color={'black'} weight="bold">
          Tất cả dịch vụ
        </Text>
        <Box
          radius={45}
          borderWidth={1}
          borderColor="#CCC"
          paddingHorizontal={14}
          marginHorizontal={-8}>
          <Input
            placeholder="Tên dịch vụ"
            size={size.m}
            color="#999"
            value={searchWord}
            onChangeText={text => setSearchWord(text)}
          />
        </Box>

        <Box>
          <Box flex={1} row wrap="wrap">
            {tuitionServiceList.map((element, index: number) => {
              const searchWordCased = searchWord.toLowerCase();
              if (
                removeTone(element.title)
                  .toLowerCase()
                  .includes(searchWordCased) ||
                element.title.toLowerCase().includes(searchWordCased)
              ) {
                return (
                  <IconBox
                    key={index}
                    icon={
                      tuitionServiceImages[
                        element.icon as keyof typeof tuitionServiceImages
                      ]
                    }
                    title={element.title}
                    onPress={() =>
                      navigation.navigate(ROUTER_ROOT.LOOKUP_SCREEN, {
                        service: element.icon,
                      })
                    }
                  />
                );
              }
            })}
          </Box>
        </Box>
      </Box>
    );
  } catch (error) {
    console.log(error);
  }
};
