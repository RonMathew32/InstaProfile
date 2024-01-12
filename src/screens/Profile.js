import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {ProfileBody} from '../components/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../components/BottomTabView';
import { IMAGES } from '../constants/images';
import { COLORS } from '../constants/colors';

const Profile = () => {
  let circuls = [];

  return (
    <View style={styles.topContainer}>
      <View style={styles.paddingH}>
        <ProfileBody
          name="Andrew Mundy"
          userName="andrewmundy"
          profileImage={IMAGES.avatar}
          followers="898"
          following="1310"
          post="1,487"
        />
      </View>
      
      <BottomTabView />
    </View>
  );
};

const styles = StyleSheet.create({
  paddingH: {padding: 10},
  topContainer: {flex: 1, backgroundColor: COLORS.white
  }
})

export default Profile;