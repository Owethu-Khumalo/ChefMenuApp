
import { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

export default function HomeScreen() {
  const router = useRouter();
  const context = useContext(MenuContext);

  if (!context) {
    return null;
  }

  const { menuItems } = context;

  // Calculate total menu items
  const totalItems = menuItems.length;

  // Calculate average menu price
  const totalPrice = menuItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const averagePrice =
    totalItems > 0 ? totalPrice / totalItems : 0;

  // Count items in each course
  const starterCount = menuItems.filter(
    (item) => item.course === 'Starter'
  ).length;

  const mainCourseCount = menuItems.filter(
    (item) => item.course === 'Main Course'
  ).length;

  const dessertCount = menuItems.filter(
    (item) => item.course === 'Dessert'
  ).length;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image
        source={require('../../assets/images/Chef logo.png')}
        style={styles.logoImage}
      />

      <Text style={styles.title}>ChefMenu</Text>

      <Text style={styles.subtitle}>
        Restaurant Menu Management
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Welcome, Chef Christoffel
        </Text>

        <Text style={styles.cardText}>
          Manage your restaurant menu by adding, editing and
          viewing menu items in one place.
        </Text>
      </View>

      {/* Statistics Dashboard */}
      <Text style={styles.sectionTitle}>
        Menu Statistics
      </Text>

      <View style={styles.statCard}>
        <Text style={styles.statLabel}>
          Total Menu Items
        </Text>

        <Text style={styles.statNumber}>
          {totalItems}
        </Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statLabel}>
          Average Menu Price
        </Text>

        <Text style={styles.statNumber}>
          R{averagePrice.toFixed(2)}
        </Text>
      </View>

      {/* Course Breakdown */}
      <Text style={styles.sectionTitle}>
        Course Breakdown
      </Text>

      <View style={styles.courseCard}>
        <View style={styles.courseRow}>
          <Text style={styles.courseLabel}>Starters</Text>
          <Text style={styles.courseNumber}>
            {starterCount}
          </Text>
        </View>

        <View style={styles.courseRow}>
          <Text style={styles.courseLabel}>Main Courses</Text>
          <Text style={styles.courseNumber}>
            {mainCourseCount}
          </Text>
        </View>

        <View style={styles.courseRow}>
          <Text style={styles.courseLabel}>Desserts</Text>
          <Text style={styles.courseNumber}>
            {dessertCount}
          </Text>
        </View>
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.buttonText}>VIEW MENU</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/add-item')}
      >
        <Text style={styles.addButtonText}>
          ADD MENU ITEM
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 30,
  },

  logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F1B12',
  },

  subtitle: {
    fontSize: 16,
    color: '#8B4513',
    marginTop: 5,
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 15,
    color: '#5C4A42',
    lineHeight: 22,
  },

  sectionTitle: {
    width: '100%',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 12,
  },

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

  courseCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E8D9CD',
  },

  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E5DC',
  },

  courseLabel: {
    fontSize: 15,
    color: '#5C4A42',
  },

  courseNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
  },

  button: {
    width: '100%',
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  addButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#8B4513',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
