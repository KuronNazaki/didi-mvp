import React from 'react';
import { Image, View } from 'react-native';

const StyledImage = ({ relativeSrc, size = 60 }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 100,
        backgroundColor: '#F5F5F5',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 15,
        shadowOpacity: 0.15,
        padding: 3,
      }}
    >
      <View
        className={`rounded-full overflow-hidden h-full w-full justify-center items-center`}
      >
        {relativeSrc ? (
          <Image
            source={
              typeof relativeSrc === 'string'
                ? { uri: relativeSrc }
                : relativeSrc
            }
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default StyledImage;
