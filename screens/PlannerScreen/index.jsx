import { ScrollView, View } from 'react-native';
import { BaseButton } from '../../components/Button';
import BaseLayout from '../../layouts/BaseLayout';
import { useHeaderHeight } from '@react-navigation/elements';
import { useState } from 'react';

export default function PlannerScreen({ onScroll }) {
  const headerHeight = useHeaderHeight();

  // const [scrollY, setScrollY] = useState(0);
  // const handleScroll = (event) => {
  //   const { y } = event.nativeEvent.contentOffset;
  //   console.log(y);
  //   setScrollY(y);
  //   onScroll(y);
  // };

  return (
    <ScrollView
      className={`w-full`}
      // onScroll={handleScroll}
      // scrollEventThrottle={8}
    >
      <View
        style={{
          paddingVertical: headerHeight + 20,
          paddingHorizontal: 20,
          gap: 10,
        }}
      >
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={headerHeight}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
        <BaseButton
          title={'Change to Home'}
          onPress={() => Alert.alert('Your first alert')}
        />
      </View>
    </ScrollView>
  );
}
