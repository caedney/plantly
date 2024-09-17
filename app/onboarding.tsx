import { View, StyleSheet, Button } from 'react-native';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleOnboarded = useUserStore((state) => state.toggleOnboarded);

  const handleOnPress = () => {
    toggleOnboarded();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Button title="Let me in!" onPress={handleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
});
