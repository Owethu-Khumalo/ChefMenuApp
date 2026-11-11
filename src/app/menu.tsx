
import { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';

const courses = ['All', 'Starter', 'Main Course', 'Dessert'];

export default function MenuScreen() {
  const router = useRouter();
  const context = useContext(MenuContext);

  const [searchText, setSearchText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [deleteConfirmationId, setDeleteConfirmationId] =
    useState<string | null>(null);

  if (!context) {
    return null;
  }

  const { menuItems, deleteMenuItem } = context;

  // Search and filter menu items
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCourse =
      selectedCourse === 'All' ||
      item.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  const handleDelete = (id: string) => {
    deleteMenuItem(id);
    setDeleteConfirmationId(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Menu</Text>

      <Text style={styles.subtitle}>
        Your restaurant dishes in one place
      </Text>

      {/* Search field */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search dishes by name..."
        placeholderTextColor="#8A7B73"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Course filters */}
      <Text style={styles.filterTitle}>Filter by course</Text>

      <View style={styles.filterContainer}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course}
            style={[
              styles.filterButton,
              selectedCourse === course &&
                styles.activeFilterButton,
            ]}
            onPress={() => setSelectedCourse(course)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCourse === course &&
                  styles.activeFilterText,
              ]}
            >
              {course}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu item list */}
      <FlatList
        style={styles.list}
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={
          filteredItems.length === 0
            ? styles.emptyContainer
            : styles.listContent
        }
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              {menuItems.length === 0
                ? 'No menu items yet'
                : 'No dishes found'}
            </Text>

            <Text style={styles.emptyText}>
              {menuItems.length === 0
                ? 'Add your first dish to see it displayed here.'
                : 'Try another search or change your course filter.'}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Text style={styles.itemName}>{item.name}</Text>

            <Text style={styles.itemDescription}>
              {item.description}
            </Text>

            <Text style={styles.course}>
              Course: {item.course}
            </Text>

            <Text style={styles.price}>
              R{item.price}
            </Text>

            {/* Edit and delete buttons */}
            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  router.push({
                    pathname: '/edit-item',
                    params: { id: item.id },
                  })
                }
              >
                <Text style={styles.buttonText}>EDIT</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() =>
                  setDeleteConfirmationId(item.id)
                }
              >
                <Text style={styles.buttonText}>DELETE</Text>
              </TouchableOpacity>
            </View>

            {/* Delete confirmation */}
            {deleteConfirmationId === item.id && (
              <View style={styles.confirmationBox}>
                <Text style={styles.confirmationText}>
                  Are you sure you want to delete {item.name}?
                </Text>

                <View style={styles.confirmationActions}>
                  <TouchableOpacity
                    style={styles.confirmDeleteButton}
                    onPress={() => handleDelete(item.id)}
                  >
                    <Text style={styles.buttonText}>
                      YES, DELETE
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() =>
                      setDeleteConfirmationId(null)
                    }
                  >
                    <Text style={styles.cancelButtonText}>
                      CANCEL
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/add-item')}
      >
        <Text style={styles.buttonText}>
          + ADD MENU ITEM
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5C4A42',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8D9CD',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    color: '#2F1B12',
    marginBottom: 12,
  },
  filterTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeFilterButton: {
    backgroundColor: '#8B4513',
  },
  filterText: {
    color: '#8B4513',
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 10,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 15,
    color: '#6B5B53',
    textAlign: 'center',
    lineHeight: 22,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E8D9CD',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F1B12',
  },
  itemDescription: {
    fontSize: 14,
    color: '#6B5B53',
    marginTop: 6,
    lineHeight: 20,
  },
  course: {
    fontSize: 14,
    color: '#5C4A42',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginTop: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#8B4513',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#B33A3A',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmationBox: {
    backgroundColor: '#FFF8F0',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  confirmationText: {
    color: '#2F1B12',
    fontSize: 14,
    marginBottom: 10,
  },
  confirmationActions: {
    flexDirection: 'row',
    gap: 8,
  },
  confirmDeleteButton: {
    flex: 1,
    backgroundColor: '#B33A3A',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E8D9CD',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#2F1B12',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
