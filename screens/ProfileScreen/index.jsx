import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Alert, Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView>
      <ScrollView className={`w-full h-full`}>
        <Text
          style={{
            paddingVertical: headerHeight + 40,
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          ProfileScreen
        </Text>
          <Button
            title={'Call api'}
            style={{marginTop: 20}}
            onPress={async () => {
              fetch('http://192.168.1.13:3000/users')
                .then((response) => response.json())
                .then((responseJson) => {
                  Alert.alert(
                    'Data ' + responseJson.data + ' ' + responseJson.anotherData
                  );
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          ></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
