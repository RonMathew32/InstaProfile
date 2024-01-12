import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/colors';

const squareSize = 135;

const renderSquare = (imageUrl, index) => (
  <View key={index}>
    <View style={styles.squareContainer}>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  </View>
);

const renderPosts = (data, title) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {data.length ? (
      <View style={styles.postContainer}>
        {data.map((imageUrl, index) => renderSquare(imageUrl, index))}
      </View>
    ) : (
      <View style={styles.noPost}>
        <Text style={styles.noPostText}>{`No ${title}!`}</Text>
      </View>
    )}
  </ScrollView>
);

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  const postData = [
    'https://images.pexels.com/photos/587411/pexels-photo-587411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5914157/pexels-photo-5914157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/16118801/pexels-photo-16118801/free-photo-of-person-with-an-umbrella-in-front-of-a-mosque.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5227445/pexels-photo-5227445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/19748551/pexels-photo-19748551/free-photo-of-modern-urban-lantern-against-dusk-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const savedData = [
    'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          borderWidth: 1,
          height: 1.5,
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'grid' : 'grid-outline';
            color = focused ? 'black' : 'gray';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'download' : 'download-outline';
            color = focused ? 'black' : 'gray';
          }

          return (
            <View style={styles.majorIconsContainer}>
              <Ionic name={iconName} color={color} size={35} />
            </View>
          );
        },
      })}>
      <Tab.Screen name="Posts">
        {() => renderPosts(postData, 'Posts')}
      </Tab.Screen>
      <Tab.Screen name="Saved">
        {() => renderPosts(savedData, 'Saved')}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  majorIconsContainer: {width: 40, height: 40, alignItems: 'center'},
  tabBarStyle: {
    height: 65,
    borderTopColor: COLORS.gray,
    borderWidth: 1,
  },
  noPostText: {fontWeight: '500', fontSize: 18, color: COLORS.black},
  noPost: {flex: 1, marginVertical: 50, alignItems: 'center'},
  image: {
    flex: 1,
    width: squareSize,
    height: squareSize,
    resizeMode: 'cover',
  },
  postContainer: {
    backgroundColor: COLORS.white,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  squareContainer: {
    width: squareSize,
    height: squareSize,
    marginVertical: 0.5,
    backgroundColor: COLORS.black,
  },
});

export default BottomTabView;
