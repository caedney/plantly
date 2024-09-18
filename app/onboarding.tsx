import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';
import { Button } from '@/components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { PlantlyImage } from '@/components/PlantlyImage';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleOnboarded = useUserStore((state) => state.toggleOnboarded);

  const handleOnPress = () => {
    toggleOnboarded();
    router.replace('/');
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        theme.colors.green,
        theme.colors.appleGreen,
        theme.colors.limeGreen,
      ]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.greeting}>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep you plants healthy and hydrated</Text>
      </View>
      <PlantlyImage style={styles.image} />
      <Button title="Let me in!" onPress={handleOnPress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  greeting: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 42,
    color: theme.colors.white,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 24,
    color: theme.colors.white,
    textAlign: 'center',
  },
  image: {
    marginBottom: 24,
  },
});
