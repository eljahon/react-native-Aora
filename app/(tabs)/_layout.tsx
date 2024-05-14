import { Tabs } from 'expo-router';
import React, { FC, ReactNode } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ITBICON } from '@/types';
import { Image, View,Text } from 'react-native';
import {icons} from '@/constants'

const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#FFA001',
  tabBarInactiveTintColor: '#CDCDE0',
  tabBarStyle: {
    backgroundColor: '#161622',
    borderTopWidth: 1,
    borderTopColor: '#232533',
    height: 94,
    padding: 2
  }
}
const TabIcon:FC<ITBICON>= ({color, name, focused, icon}):ReactNode => {
  return ( 
  <View className='items-center justify-center gap-2'>
      <Image 
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-sm`} style={{color:color}}>{name}</Text>
  </View>)
}
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    initialRouteName='home'
    screenOptions={screenOptions}
     >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
             return <TabIcon 
             color={color} 
             focused={focused}
             name="Home"
             icon={icons.home}
             />
          }
        }}
      />
           <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
             return <TabIcon 
             color={color} 
             focused={focused}
             name="Bookmark"
             icon={icons.bookmark}
             />
          }
        }}
      />
           <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
             return <TabIcon 
             color={color} 
             focused={focused}
             name="Create"
             icon={icons.plus}
             />
          }
        }}
      />
           <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
             return <TabIcon 
             color={color} 
             focused={focused}
             name="Profile"
             icon={icons.profile}
             />
          }
        }}
      />
    </Tabs>
  );
}
