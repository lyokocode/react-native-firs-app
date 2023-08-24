import { View, Text, Image, TextInput } from 'react-native'
import { Profile, Search } from "../Icons"
const Header = () => {
    return (
        <View className="flex-row items-center justify-between p-2 bg-white">
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg' }}
                className="w-10 h-10 rounded-full"
            />
            <View className="flex-row items-center mx-2 rounded-md p-2 border border-cyan-400 relative flex-1">
                <Search size={20} color="#22d3ee" className="absolute right-0" />
                <TextInput
                    placeholder='search...'
                    className=" pl-6"
                    keyboardType='default'
                />
            </View>
            <Profile size={35} fill="#0891b2" />

        </View>
    )
}

export default Header
