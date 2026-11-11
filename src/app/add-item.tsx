
import { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MenuContext } from './_layout';
import type { MenuItem } from '../data/menuData';

const courses = ['Starter', 'Main Course', 'Dessert'];

export default function AddItemScreen() {
  const router = useRouter();
  const context = useContext(MenuContext);

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!context) {
    return null;
  }

  const { addMenuItem } = context;

const handleAddItem = () => {
  console.log('1. Function started');

  console.log('2. Dish name:', dishName);
  console.log('3. Description:', description);
  console.log('4. Course:', course);
  console.log('5. Price:', price);

  if (
    !dishName.trim() ||
    !description.trim() ||
    !course ||
    !price.trim()
  ) {
    console.log('6. Validation failed');

    setErrorMessage('Please complete all fields.');
setSuccessMessage('');
return;
  }

  console.log('7. Validation passed');

  const priceNumber = Number(price.trim());

  if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
  console.log('8. Invalid price');
  setErrorMessage('Please enter a valid price greater than zero.');
  setSuccessMessage('');
  return;
}

  console.log('9. Creating menu item');

  const newItem: MenuItem = {
    id: Date.now().toString(),
    name: dishName.trim(),
    description: description.trim(),
    course,
    price: priceNumber.toFixed(2),
  };

  addMenuItem(newItem);

console.log('10. Menu item added');

setSuccessMessage(`${newItem.name} has been added successfully!`);

setDishName('');
setDescription('');
setCourse('');
setPrice('');
setErrorMessage('');
};

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Add Menu Item</Text>

      <Text style={styles.subtitle}>
        Enter the details of your new dish below.
      </Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={dishName}
        onChangeText={(value) => {
          setDishName(value);
          setErrorMessage('');
        }}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Enter dish description"
        value={description}
        onChangeText={(value) => {
          setDescription(value);
          setErrorMessage('');
        }}
        multiline
      />

      <Text style={styles.label}>Select Course</Text>

      <View style={styles.courseContainer}>
        {courses.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.courseButton,
              course === item && styles.selectedCourse,
            ]}
            onPress={() => {
              setCourse(item);
              setErrorMessage('');
            }}
          >
            <Text
              style={[
                styles.courseButtonText,
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
        placeholder="Enter price"
        value={price}
        onChangeText={(value) => {
          setPrice(value);
          setErrorMessage('');
        }}
        keyboardType="decimal-pad"
      />

      

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddItem}
      >
        <Text style={styles.buttonText}>ADD MENU ITEM</Text>
        {successMessage !== '' && (
  <Text style={styles.successMessage}>
    {successMessage}
    {errorMessage ? (
        <Text style={styles.errorText}>
          {errorMessage}
        </Text>
      ) : null}
  </Text>
)}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.cancelText}>CANCEL</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  container: {
    padding: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2F1B12',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B5B53',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F1B12',
    marginBottom: 7,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6C5B8',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 16,
    marginBottom: 18,
  },
  descriptionInput: {
    height: 90,
    textAlignVertical: 'top',
  },
  courseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  courseButton: {
    borderWidth: 1,
    borderColor: '#8B4513',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  selectedCourse: {
    backgroundColor: '#8B4513',
  },
  courseButtonText: {
    color: '#8B4513',
    fontWeight: 'bold',
  },
  selectedCourseText: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successMessage: {
  color: 'green',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 15,
},
});
