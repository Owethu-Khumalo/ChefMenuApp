
import { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MenuContext } from './_layout';

const courses = ['Starter', 'Main Course', 'Dessert'];

export default function EditItemScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const context = useContext(MenuContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!context) {
    return null;
  }

  const { menuItems, updateMenuItem } = context;

  const selectedItem = menuItems.find(
    (item) => item.id === id
  );

  const [dishName, setDishName] = useState(
    selectedItem?.name ?? ''
  );
  const [description, setDescription] = useState(
    selectedItem?.description ?? ''
  );
  const [course, setCourse] = useState(
    selectedItem?.course ?? ''
  );
  const [price, setPrice] = useState(
    selectedItem?.price ?? ''
  );

  const handleUpdateItem = () => {
    if (!selectedItem) {
      setErrorMessage('Menu item could not be found.');
      return;
    }

    if (
      !dishName.trim() ||
      !description.trim() ||
      !course ||
      !price.trim()
    ) {
      setErrorMessage('Please complete all fields.');
      setSuccessMessage('');
      return;
    }

    const priceNumber = Number(price.trim());

    if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
      setErrorMessage('Please enter a valid price greater than zero.');
      setSuccessMessage('');
      return;
    }

    updateMenuItem({
      id: selectedItem.id,
      name: dishName.trim(),
      description: description.trim(),
      course,
      price: priceNumber.toFixed(2),
    });

    setErrorMessage('');
    setSuccessMessage('Menu item updated successfully!');
  };

  if (!selectedItem) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item Not Found</Text>
        <Text style={styles.subtitle}>
          This menu item could not be found.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/menu')}
        >
          <Text style={styles.buttonText}>BACK TO MENU</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Edit Menu Item</Text>

      <Text style={styles.subtitle}>
        Update your dish information below
      </Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Enter dish name"
        placeholderTextColor="#8A7B73"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter dish description"
        placeholderTextColor="#8A7B73"
        multiline
      />

      <Text style={styles.label}>Course</Text>

      <View style={styles.courseContainer}>
        {courses.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.courseButton,
              course === item && styles.selectedCourse,
            ]}
            onPress={() => setCourse(item)}
          >
            <Text
              style={[
                styles.courseText,
                course === item && styles.selectedCourseText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        placeholderTextColor="#8A7B73"
        keyboardType="decimal-pad"
      />

      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}

      {successMessage !== '' && (
        <Text style={styles.successMessage}>
          {successMessage}
        </Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdateItem}
      >
        <Text style={styles.buttonText}>SAVE CHANGES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace('/menu')}
      >
        <Text style={styles.backButtonText}>CANCEL</Text>
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
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#5C4A42',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8D9CD',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: '#2F1B12',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  courseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  courseButton: {
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  selectedCourse: {
    backgroundColor: '#8B4513',
  },
  courseText: {
    color: '#8B4513',
    fontWeight: 'bold',
    fontSize: 13,
  },
  selectedCourseText: {
    color: '#FFFFFF',
  },
  errorMessage: {
    color: '#B33A3A',
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  successMessage: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#8B4513',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
