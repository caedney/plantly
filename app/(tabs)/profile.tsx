import { View, StyleSheet, Button } from 'react-native';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';

export default function ProfileScreen() {
  const toggleOnboarded = useUserStore((state) => state.toggleOnboarded);

  const handleOnPress = () => {
    toggleOnboarded();
  };

  return (
    <View style={styles.container}>
      <Button title="Let me out!" onPress={handleOnPress} />
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
