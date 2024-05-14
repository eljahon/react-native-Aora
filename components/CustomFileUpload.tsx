import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { IFileUpload } from '@/types'
import { icons } from '@/constants'

const CustomFileUpload:FC<IFileUpload> = (props) => {

    const {textLabel, isdashed} = props
  return (
    <View className='mt-5'>
      <Text className='text-white font-medium text-[16px] mb-[8px]'>{textLabel}</Text>
      {isdashed&&<View className='bg-[#222432] rounded-[8px] flex justify-center align-center w-full h-[149px]'>
        <View className='border border-dashed border-secondary-100 w-[50px] h-[50px] rounded-[10px] m-auto'>
        <Image className='m-auto w-[24px] h-[24px]' source={icons.upload}/>
        </View>
      </View>}
     {!isdashed&& <View className='bg-[#222432] rounded-[8px] flex justify-center align-center w-full h-[58px]'>
            <View className='flex-row justify-center align-center'>
                <Image className='w-[24px] h-[24px]' source={icons.upload}/>
                <Text className='text-white font-medium text-[14px] mt-2 ml-2'>Choose a file</Text>
            </View>
        </View>}
    </View>
  )
}

export default CustomFileUpload