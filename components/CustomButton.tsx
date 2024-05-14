import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { IButton } from '@/types'

const CustomButton:FC<IButton> = ({title, handlePross, textStyle, titleStyle, isLoading}):ReactNode => {
  return (
    <TouchableOpacity
        onPress={handlePross} 
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${titleStyle}`}
        activeOpacity={0.7}
        disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton