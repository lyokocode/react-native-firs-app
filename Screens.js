import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator()

// screens
import HomeScreen from "./screens/Home"
import SettingScreen from "./screens/Settings"
import ProfileScreen from "./screens/Profile"

// icons
import { Home, HomeFilled, Profile, Settings, SettingsFilled, ProfileFilled } from "./Icons"

function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <HomeFilled size={size} fill="#000" />
                        return <Home size={size} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="settings"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <SettingsFilled size={size} fill="#000" />
                        return <Settings size={size} fill={color} />
                    }
                }}

            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <Profile size={size} fill="#000" />
                        return <ProfileFilled size={size} fill="#fff" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Screens