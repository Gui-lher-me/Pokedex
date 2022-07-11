import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Home } from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
