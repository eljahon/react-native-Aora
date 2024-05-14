import { View, Text } from 'react-native'
import React from 'react'
import CustomTextInput from './CustomTextInput'

const SearchInput = () => {
  return (
    <View className='p-6'>
      <Text>SearchInput</Text>
      <CustomTextInput secureTextEntry iconName='search' placeholderText='Search for a video topic'/>
    </View>
  )
}

export default SearchInput