import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator()

// screens
import HomeScreen from "./screens/Home"
import SettingScreen from "./screens/Settings"
import ProfileScreen from "./screens/Profile"
import ExpenseScreen from "./screens/Expense"


// icons
import { Home, HomeFilled, Profile, Settings, SettingsFilled, ProfileFilled, Expense, ExpenseFilled } from "./Icons"

function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false
            }}
        >
            {/* home screen */}
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
            {/* expense screen */}

            <Tab.Screen
                name="expense"
                component={ExpenseScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) return <ExpenseFilled size={size} fill="#000" />
                        return <Expense size={size} fill={color} />
                    }
                }}
            />
            {/* setting screen */}

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

            {/* profile screen */}

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