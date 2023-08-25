import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import Logo from "../assets/Logo.jpg"

export const Login = () => {
    const { height } = useWindowDimensions()
    console.warn(height)
    return (
        <View className="flex items-center justify-center w-full   " style={{ height: height }}>
            <Image source={Logo} style={{ height: height * 0.2, maxHeight: 200 }} resizeMode='contain'
                className=" flex w-full h-full"
            />
        </View>
    )
}
