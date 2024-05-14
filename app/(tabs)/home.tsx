import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SearchInput from '@/components/SearchInput'

const Home = () => {
  return (
    <SafeAreaView className='bg-primary h-full p-6'>
      <SearchInput />
    {/* <View className='flex justify-center align-center w-full h-full'>
      <Text className='text-center text-white'>Home</Text>
    </View> */}
    </SafeAreaView>
   
  )
}

export default Home