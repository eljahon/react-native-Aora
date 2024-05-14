import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import CustomTextInput from '@/components/CustomTextInput'

const SignUp = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
    <View className='flex justify-center align-ceneter w-full h-full p-4'>

      <Image source={images.logo} resizeMode='cetner' className='w-[115px] h-[35px]'/>
      <Text className='text-white text-xl mt-8 '>Sign Up</Text>
      <CustomTextInput
        outStyle='mt-6' 
        textLabel='Username'
        placeholderText='Your unique username'
        />
        <CustomTextInput
        outStyle='mt-6' 
        textLabel='Email'
        placeholderText='Your unique username'
        />
        <CustomTextInput
        outStyle='mt-6' 
        textLabel='Password'
        placeholderText='Your unique username'
        secureTextEntry
        isPassword
        />
      <CustomButton 
      handlePross={() => router.push('/home')}
      title={'Sign Up'}
      titleStyle='w-full mt-7'
      
      />
      <Text className='text-white text-center mt-5'>
      Already have an account? 
        
          <Link href='/sign-in' className='text-secondary text-center mt-2'> Login  </Link>
      </Text>
    </View>
    </SafeAreaView>
  )
}

export default SignUp