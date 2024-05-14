import { View, Text,TextInput, Image, Alert,TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { ITextInput } from '@/types'
import { icons } from '@/constants'

const CustomTextInput:FC<ITextInput> = (props) => {
    const {inputValue,inputError, placeholderText,textLabel,outStyle,secureTextEntry,isPassword,iconName} = props;
    const [isEye, setIsEye] = useState<boolean>(true)
  return (
    <View className={`${outStyle}`}>
      <Text className='text-white font-medium text-[16px]'>{textLabel}</Text>

      <View className={`bg-black-200 mt-2 rounded-lg flex-row  focus:border-secondary-100 focus:border`}>
      <TextInput 
          className='p-4 text-white text-[16px] font-semibold w-11/12 h-full' 
          passwordRules={placeholderText} 
          placeholder={placeholderText}
          secureTextEntry={isPassword&&secureTextEntry? isEye : !isEye}
          placeholderTextColor='#7B7B8B'
      />
     {secureTextEntry&&<TouchableOpacity  onPress={() => {
        setIsEye(old => !old)
      }}>
       { isPassword&&<View className='cursor-pointer'>
      <Image  className='w-[18px] h-[12px] flex mt-5 ' source={isEye ?icons.eyeHide  : icons.eye}/>
      </View>} 

      {!isPassword&&<View className='cursor-pointer'>
      <Image  className='w-[18px] h-[18px] flex mt-5 ' source={icons[iconName]}/>
      </View>}
      </TouchableOpacity>}
      

      </View>
    </View>
  )
}

export default CustomTextInput