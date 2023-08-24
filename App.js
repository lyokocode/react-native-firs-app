import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screens';
import { SafeAreaView } from 'react-native';
import GlobalStyles from './GlobalStyles';


export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}

