import { View, Text, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import CustomTextInput from '@/components/CustomTextInput'
import CustomFileUpload from '@/components/CustomFileUpload'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'

const Create = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
    <View className='w-full h-full p-4'>
      <Text className='text-white text-[22px] font-semibold mt-7'>Upload Video</Text>
      <CustomTextInput outStyle='mt-8' textLabel='Video Title' placeholderText='Give your video a catchy title...'/>
      <CustomFileUpload isdashed textLabel='Upload Video'/>
      <CustomFileUpload textLabel='Thumbnail Image'/>
      <CustomTextInput outStyle='mt-8 mb-6' textLabel='AI Prompt' placeholderText='The AI prompt of your video....'/>
      <CustomButton title='Submit & Publish'/>
      <StatusBar backgroundColor='#161622' style='light' />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Create