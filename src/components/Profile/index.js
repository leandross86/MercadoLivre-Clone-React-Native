import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

export default function Profile() {
  return (
    <View style={styles.user_profile}>
      <Image 
        source={{ uri:"https://avatars1.githubusercontent.com/u/43308192?s=460&u=d06212ec346a68011edebd84efcd671ec7862319&v=4" }}
      />
    </View>
  );
}
