import { View, Text, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import { fakeExpenseData } from '../data';
import Header from "../components/Header"

const chartConfig = {
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2
};
const screenWidth = Dimensions.get("window").width;


const Expense = () => {


    return (
        <View
            className=" flex items-center w-screen h-screen flex-1  "

        >
            <Header />
            <Text className="font-bold text-2xl"> Expense</Text>
            <View className="bg-red-500 flex-1 items-center justify-center">
                <PieChart
                    data={fakeExpenseData}
                    width={screenWidth}
                    height={300}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                />
            </View>
        </View>
    )
}

export default Expense