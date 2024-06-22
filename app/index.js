import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const  App  = () => {
  return (
    <View className = "flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack" >Aora!</Text>
      <StatusBar style="auto"  />
      <Link href="/profile" className="text-blue-500"> Go to Profile </Link>
    </View>
  );
};
export default App;