import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          width: '70%',
          flexDirection: 'row',
          paddingHorizontal: 8,
          marginTop: 5,
          paddingLeft: 20,
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Địa chỉ số</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0069F6', // Màu xanh dương
    height: 100,
    // paddingTop: 60,
    // paddingHorizontal: 10,
  },
  button: {
    padding: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  rightButtons: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // backgroundColor: "rgba(255, 255, 255, 0.2)", // Màu trắng trong suốt
    // borderRadius: 20,
    // paddingHorizontal: 10,
    height: 35,
    width: '90%',
    marginLeft: 8,
  },
});

export default Header;
