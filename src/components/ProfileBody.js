import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const UserActivities = React.memo(({ value = 0, label, index }) => (
  <View key={index} style={styles.alignContainer}>
    <Text style={styles.activityValue}>{value}</Text>
    <Text style={styles.post}>{label}</Text>
  </View>
));

export const ProfileBody = ({
  name = 'New User',
  userName = 'newuser',
  profileImage,
  post = 0,
  followers = 0,
  following = 0,
}) => {

  const userActivitiesData = [
    { value: post, label: 'Post' },
    { value: followers, label: 'Followers' },
    { value: following, label: 'Following' },
  ];

  const userDescription = [
    {
      description: 'Most of these photos are developed and scanned at home by hand.',
      address: 'SF, CA',
      website: 'www.andrewmundy.net',
    },
  ];

  return (
    <View>
      <Text style={styles.userName}>{userName}</Text>
      <View style={styles.profileContainer}>
        <View style={styles.alignContainer}>
          <Image source={profileImage} style={styles.imgContainer} />
          <Text style={styles.name}>{name}</Text>
        </View>

        {userActivitiesData?.map((item, index) => (
          <UserActivities key={index} index={index} value={item?.value} label={item.label} />
        ))}
      </View>

      {userDescription?.map((item, index) => (
        <View key={index}>
          <Text style={styles.desc(COLORS.black)}>{item?.description}</Text>
          <Text style={styles.desc(COLORS.black)}>{item?.address}</Text>
          <Text style={styles.desc(COLORS.link)}>{item?.website}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.editContainer}>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  desc: (color)=> {
    return {
      color: color,
      fontWeight: '700',
    }
  },
  editProfile: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.black,
    letterSpacing: 1,
    opacity: 0.8,
  },
  editContainer: {
    height: 35,
    borderRadius: 5,
    borderColor: COLORS.gray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  post: { color: COLORS.black },
  activityValue: { fontWeight: 'bold', fontSize: 18, color: COLORS.black },
  name: {
    paddingVertical: 5,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  imgContainer: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  alignContainer: { alignItems: 'center' },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 20,
  },
});
