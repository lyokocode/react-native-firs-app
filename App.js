import { SafeAreaView } from 'react-native';
import GlobalStyles from './GlobalStyles';
import { Login } from './screens';


export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <Login />
    </SafeAreaView>
  );
}

