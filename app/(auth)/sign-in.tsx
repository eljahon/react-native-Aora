import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import CustomTextInput from '@/components/CustomTextInput'


const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
    <View className='flex justify-center align-ceneter w-full h-full p-4'>

      <Image source={images.logo} resizeMode='cetner' className='w-[115px] h-[35px]'/>
      <Text className='text-white text-xl mt-8 '>Sign In</Text>
        <CustomTextInput
        outStyle='mt-6' 
        textLabel='Email'
        placeholderText='Your unique username'
        />
        <CustomTextInput
        outStyle='mt-6' 
        textLabel='Password'
        isPassword
        placeholderText='Your unique username'
        secureTextEntry
        />
        <Link href='/' className='text-white mt-4 text-right text-secondary-100'>Forgot password</Link>
      <CustomButton 
      handlePross={() => router.push('/home')}
      title={'Login In'}
      titleStyle='w-full mt-7'
      
      />
      <Text className='text-white text-center mt-5'>
      Don’t have an account? <Link href='/sign-up' className='text-secondary'> Sign up </Link>
      </Text>
      

    </View>
    </SafeAreaView>
  )
}

export default SignIn