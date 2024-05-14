import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'
const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full p-4'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full min-h[85vh] mt-4   items-center'>
          <Image
            source={images.logo}

            className='w-[130px] h-[84px]'
            resizeMode='center'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='center'
          />

          <View className='relative mt-5 '>
            <Text className='text-2xl text-white text-center font-bold'>
              Discover Endless Possibilities with Aora {' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 right-8' resizeMode='contain' />
          </View>

          <Text className='text-gray-100 mt-7  text-center font-pregular'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>
          <CustomButton
            handlePross={() => router.push('/sign-in')}
            title={'Continue with Email'}
            titleStyle='w-full mt-7'
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}


export default index
