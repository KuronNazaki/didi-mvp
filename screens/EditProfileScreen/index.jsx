import { useHeaderHeight } from '@react-navigation/elements';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TextInputWithLabel } from '../../components/Input';
import { BaseButton } from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  const [imageUrlState, setImageUrlState] = useState('');
  const [nameState, setNameState] = useState('');
  const [bioState, setBioState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const stringData = await AsyncStorage.getItem('@userToken');
      const parsedData = JSON.parse(stringData);
      setUser(parsedData);
      setEmailState(parsedData.email)
      setNameState(parsedData.name);
      setBioState(parsedData.bio);
      setImageUrlState(parsedData.imageUrl);
    };
    getUser();
  }, []);

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`w-full h-full overflow-visible`}>
        <View
          className={`h-full flex-col w-full p-5`}
          style={{ paddingTop: headerHeight + 20 }}
        >
          <View style={{ rowGap: 20 }}>
            <TextInputWithLabel
              label={'Email'}
              placeholder={'Email'}
              value={emailState}
              disabled
              multiline
            />
            <TextInputWithLabel
              label={'Đường dẫn ảnh'}
              placeholder={'Nhập đường dẫn ảnh vào đây'}
              value={imageUrlState}
              onValueChange={setImageUrlState}
              multiline
            />
            <TextInputWithLabel
              label={'Tên'}
              placeholder={'Nhập tên vào đây'}
              value={nameState}
              onValueChange={setNameState}
              multiline
            />
            <TextInputWithLabel
              label={'Mô tả bản thân'}
              placeholder={'Nhập mô tả vào đây'}
              value={bioState}
              onValueChange={setBioState}
              multiline
            />
            <View className="w-full mt-6">
              <BaseButton
                title={'Lưu'}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
