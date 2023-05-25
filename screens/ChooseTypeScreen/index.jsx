import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { BaseButton, IconButton } from '../../components/Button';
import AddItemSvg from './../../assets/additem-overlay.svg';

const BUTTONS = [
  {
    id: 1,
    title: 'Create New Plan',
    icon: <AddItemSvg width={80} height={80} color={'white'} />,
    onPress: (navigation) => () => navigation.navigate('CreatePlan'),
  },
  {
    id: 2,
    title: 'Create With Existing Template',
    icon: <AddItemSvg width={80} height={80} color={'white'} />,
  },
];

const ChooseTypeScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  return (
    <View
      className={`w-full h-full bg-white overflow-visible`}
      style={{ paddingTop: headerHeight + 20, paddingHorizontal: 20 }}
    >
      <FlatList
        className={`overflow-visible`}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        data={BUTTONS}
        renderItem={({ item }) => (
          <IconButton
            title={item.title}
            icon={item.icon}
            onPress={item.onPress?.(navigation)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChooseTypeScreen;
