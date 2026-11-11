
import { StyleSheet, Text, View } from 'react-native';

type StatCardProps = {
  title: string;
  value: string | number;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{title}</Text>

      <Text style={styles.statNumber}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8D9CD',
  },

  statLabel: {
    fontSize: 15,
    color: '#5C4A42',
    fontWeight: 'bold',
  },

  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 8,
  },
});
