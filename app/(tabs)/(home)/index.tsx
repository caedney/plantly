import { FlatList, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { usePlantStore } from '@/store/plantsStore';
import { PlantCard } from '@/components/PlantCard';
import { Button } from '@/components/Button';
import { useRouter } from 'expo-router';

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <Button
          title="Add your first plant"
          onPress={() => router.navigate('/new')}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainer: { padding: 12 },
});
