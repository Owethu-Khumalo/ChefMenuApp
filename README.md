# ChefMenuApp – Restaurant Menu Management Application

## 1. Project Overview

ChefMenuApp is a mobile application developed as part of the Mobile Application Scripting Practical Outcome Exercise (POE).

The application is designed to help chefs manage restaurant menu items in one convenient location. It provides an organised interface where users can add, view, edit, delete, search and filter menu items.

The application also includes a statistics dashboard that provides an overview of the restaurant menu, helping users monitor the number of dishes available, average menu prices and the distribution of dishes across different courses.

## 2. Project Objectives

The main objectives of ChefMenuApp are to:

- Provide a user-friendly interface for managing restaurant menu items.
- Allow users to add new dishes with relevant information.
- Allow users to edit and update existing menu items.
- Allow users to delete unwanted menu items.
- Provide search and filtering functionality.
- Display useful menu statistics.
- Apply reusable components and organised code structures.
- Use Expo Router to manage navigation between application screens.

## 3. Technologies and Tools Used

The application was developed using the following technologies:

| Technology         | Purpose                                                                      |
| ------------------ | ---------------------------------------------------------------------------- |
| React Native       | Used to develop the mobile application interface.                            |
| Expo               | Provides the development environment and tools for building the application. |
| Expo Router        | Manages navigation between screens using a file-based routing system.        |
| TypeScript         | Provides type definitions and helps organise application code.               |
| JavaScript         | Used for application logic, calculations and data manipulation.              |
| React Context API  | Allows menu data and menu management functions to be shared between screens. |
| Visual Studio Code | Used as the development environment.                                         |
| Expo Go            | Used to run and test the application on a mobile device.                     |

## 4. Main Application Features

### 4.1 Home Screen

The home screen acts as the main dashboard of the application.

It includes:

- ChefMenuApp branding and logo.
- A welcome message.
- Navigation options to access the application's main features.
- A statistics dashboard displaying menu information.

### 4.2 Add Menu Items

Users can add new dishes by entering the following information:

- Dish name.
- Dish description.
- Course.
- Price.

The application includes input validation to ensure that required information is provided and that the price is a valid positive number.

A success message is displayed when a menu item is added successfully.

### 4.3 View Menu Items

Users can view all menu items that have been added to the application.

Each menu item displays its relevant information, including its name, description, course and price.

### 4.4 Edit Menu Items

Users can select an existing menu item and update its information.

The application allows users to change the dish name, description, course and price. Once changes are saved, the updated information is reflected in the menu.

### 4.5 Delete Menu Items

Users can remove menu items that are no longer required.

A confirmation option is provided before deletion to help prevent accidental removal of menu items.

### 4.6 Search and Filter

The application provides search and filtering functionality to make menu management easier.

Users can:

- Search for dishes using their names.
- Filter dishes by Starter.
- Filter dishes by Main Course.
- Filter dishes by Dessert.
- View all menu items using the All option.
- Clear the selected search and filter options.

### 4.7 Statistics Dashboard

The statistics dashboard provides an overview of the restaurant menu.

It displays:

- **Total Menu Items:** The total number of dishes currently added.
- **Average Menu Price:** The average price of all menu items.
- **Starter Count:** The number of starter dishes.
- **Main Course Count:** The number of main course dishes.
- **Dessert Count:** The number of dessert dishes.

The statistics are calculated using the current menu data and update when menu items are added, edited or deleted.

## 5. Expo Router and Application Navigation

ChefMenuApp uses Expo Router to manage navigation between its different screens.

Expo Router uses a file-based routing system. This means that application screens are organised as files inside the `src/app` directory. Each screen file represents a route that can be accessed through the application's navigation system.

The application uses the following screens:

- `index.tsx` – Main home screen and statistics dashboard.
- `menu.tsx` – Displays menu items and provides search, filtering and deletion functionality.
- `add-item.tsx` – Allows users to add new menu items.
- `edit-item.tsx` – Allows users to edit existing menu items.
- `_layout.tsx` – Defines the root navigation layout and manages the shared menu context provider.

The `Stack` component from Expo Router is used in `_layout.tsx` to establish the application's stack navigation structure.

The application also uses navigation parameters to pass a selected menu item's ID to the editing screen. This allows the application to identify which menu item needs to be updated.

## 6. Application Structure

The project follows an organised folder structure to separate screens, components and data definitions.

```text
ChefMenuApp/
│
├── assets/
│   └── images/
│       └── Chef logo.png
│
├── src/
│   │
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── menu.tsx
│   │   ├── add-item.tsx
│   │   └── edit-item.tsx
│   │
│   ├── components/
│   │   └── StatCard.tsx
│   │
│   └── data/
│       └── menuData.ts
│
└── README.md
```

### Folder and File Descriptions

| File or Folder   | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `assets/images`  | Stores application images and the chef logo.                       |
| `src/app`        | Contains the application screens and Expo Router navigation files. |
| `_layout.tsx`    | Defines the navigation layout and shared menu data context.        |
| `index.tsx`      | Displays the home screen and statistics dashboard.                 |
| `menu.tsx`       | Displays and manages menu items.                                   |
| `add-item.tsx`   | Contains the add menu item form.                                   |
| `edit-item.tsx`  | Contains the edit menu item functionality.                         |
| `src/components` | Contains reusable interface components.                            |
| `StatCard.tsx`   | Reusable component for displaying menu statistics.                 |
| `src/data`       | Contains menu-related type definitions and data structures.        |

## 7. State Management and Data Handling

React Context API is used to share menu information and menu management functions between different application screens.

The shared context provides the following functions:

- `addMenuItem()` – Adds a new menu item.
- `updateMenuItem()` – Updates an existing menu item.
- `deleteMenuItem()` – Removes a menu item.

React's `useState` Hook is used to manage changing application data and form values.

The application uses JavaScript array methods such as `filter()` to search and filter menu items and `reduce()` to calculate values used in the statistics dashboard.

The menu data is currently managed in application memory through React state. It is not connected to a permanent database, so the menu items are reset when the application is restarted or refreshed.

## 8. Reusable Components and Code Organisation

The application includes a reusable component called `StatCard.tsx`.

This component is responsible for displaying individual statistics using a consistent layout and styling.

Reusable components help reduce repeated code and make the application easier to maintain.

The application also separates navigation screens, shared data management and reusable components into different files to improve code organisation and readability.

## 9. Installation and Running the Application

### Requirements

Before running the application, ensure that the following are installed:

- Node.js
- npm
- Visual Studio Code
- Expo Go (if testing on a physical mobile device)

### Steps to Run

1. Open the ChefMenuApp project folder in Visual Studio Code.
2. Open the integrated terminal.
3. Ensure that the terminal is located inside the main ChefMenuApp folder, where `package.json` is located.
4. Install the project dependencies if they have not already been installed:

```bash
npm install
```

5. Start the Expo development server:

```bash
npx expo start
```

6. Scan the displayed QR code using Expo Go to run the application on a compatible mobile device.

Alternatively, press `W` in the terminal to open the application in a web browser, if web support is configured.

## 10. Testing and Validation

The application was tested to ensure that its main features function correctly.

The following functionality was checked:

- Adding new menu items.
- Displaying menu items.
- Validating required form fields.
- Validating menu item prices.
- Editing existing menu items.
- Deleting menu items.
- Searching for menu items.
- Filtering menu items by course.
- Clearing search and filter options.
- Updating the statistics dashboard after menu changes.
- Navigating between application screens.

Validation and feedback messages help users understand whether their actions have been completed successfully or whether additional information is required.

## 11. Conclusion

ChefMenuApp provides a convenient solution for managing restaurant menu items through a simple and organised mobile application.

The application demonstrates the use of React Native, Expo and Expo Router, together with TypeScript, React Context API and reusable components.

The implementation of menu management, search and filtering, input validation and a statistics dashboard improves the overall functionality and usability of the application.

The project also demonstrates the importance of organised code, reusable components and effective navigation when developing mobile applications.

## 12. References

The following official documentation and learning resources were consulted to understand the technologies, concepts and functionality relevant to the development of ChefMenuApp.

Expo (n.d.) *Introduction to Expo Router*. Available at: [https://docs.expo.dev/router/introduction/](https://docs.expo.dev/router/introduction/) (Accessed: 4 November 2026).

Expo (n.d.) *Core concepts of file-based routing in Expo Router*. Available at: [https://docs.expo.dev/router/basics/core-concepts/](https://docs.expo.dev/router/basics/core-concepts/) (Accessed: 4 November 2026).

Expo (n.d.) *Navigating between pages in Expo Router*. Available at: [https://docs.expo.dev/router/basics/navigation/](https://docs.expo.dev/router/basics/navigation/) (Accessed: 4 November 2026).

Expo (n.d.) *Using URL parameters*. Available at: [https://docs.expo.dev/router/reference/url-parameters/](https://docs.expo.dev/router/reference/url-parameters/) (Accessed: 4 November 2026).

Expo (n.d.) *Stack navigator*. Available at: [https://docs.expo.dev/router/advanced/stack/](https://docs.expo.dev/router/advanced/stack/) (Accessed: 4 November 2026).

React (n.d.) *useState*. Available at: [https://react.dev/reference/react/useState](https://react.dev/reference/react/useState) (Accessed: 4 November 2026).

React (n.d.) *useContext*. Available at: [https://react.dev/reference/react/useContext](https://react.dev/reference/react/useContext) (Accessed: 4 November 2026).

React Native (n.d.) *Core Components and Native Components*. Available at: [https://reactnative.dev/docs/intro-react-native-components](https://reactnative.dev/docs/intro-react-native-components) (Accessed: 4 November 2026).

TypeScript (n.d.) *TypeScript Documentation*. Available at: [https://www.typescriptlang.org/docs/handbook/](https://www.typescriptlang.org/docs/handbook/) (Accessed: 4 November 2026).

MDN Web Docs (n.d.) *Array.prototype.filter()*. Available at: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) (Accessed: 4 November 2026).

MDN Web Docs (n.d.) *Array.prototype.reduce()*. Available at: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) (Accessed: 4 November 2026).

---

**Project:** ChefMenuApp
**Module:** Mobile Application Scripting
**Assessment:** MAST Part 3
**Developer:** Owethu Khumalo


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
