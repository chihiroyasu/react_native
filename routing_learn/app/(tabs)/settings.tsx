import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function Screen() {
  const router = useRouter();
  
  const handlePress = () => {
    router.push('/');
  };

  return (
    <Button title="Go to index" onPress={handlePress} />
  );
}