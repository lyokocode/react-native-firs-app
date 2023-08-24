import { View, Text, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import { fakeExpenseData } from '../data';

const chartConfig = {
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2
};
const screenWidth = Dimensions.get("window").width;


const Expense = () => {
    return (
        <View
            className=" flex items-center justify-center w-screen h-screen  "

        >
            <Text className="font-bold text-2xl"> Expense</Text>
            <PieChart
                className="h-screen w-screen"
                data={fakeExpenseData}
                width={screenWidth}
                height={300}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
            />
        </View>
    )
}

export default Expense