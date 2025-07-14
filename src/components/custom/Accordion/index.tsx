import {Text} from '@src/components/core';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type AccordionItemPros = PropsWithChildren<{
  title: string;
}>;

export const AccordionItem = ({
  children,
  title,
}: AccordionItemPros): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View style={styles.accordBody}>{children}</View>;

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text size={20} style={styles.accordTitle}>
          {title}
        </Text>
        <Text size={20} color="black">
          {expanded ? '^' : 'v'}
        </Text>
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#666',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});
