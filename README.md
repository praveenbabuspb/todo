Here's the code for the README file:

```markdown
# Todo List App - React Native

## Overview
This is a simple **Todo List Application** built using **React Native**. The app allows users to manage their tasks by adding, editing, deleting, and marking them as completed. The tasks persist even after closing and reopening the app using **AsyncStorage**.

The app features:
- Bottom tab navigation with **Todo List** and **Completed Tasks** screens.
- Task management with features like **Add, Edit, Delete**, and **Mark as Completed**.
- Simple and clean UI using **React Native Paper** for a responsive experience.
- **Search and Sort** tasks by name or due date.
  
---

## Features

- **Todo List Screen**: Displays tasks with options to:
  - Add a new task.
  - Edit the task name.
  - Delete a task.
  - Mark a task as completed.
  
- **Completed Tasks Screen**: Displays tasks that have been marked as completed, with the option to delete them.

- **Persistence**: Tasks are stored using **AsyncStorage**, ensuring that tasks persist even after closing and reopening the app.

- **Search Functionality**: Allows users to search tasks by name.

- **Task Sorting**: Sort tasks by name or due date for better organization.

---

## Installation

### Prerequisites
To run this app, you need:
- Node.js and npm installed on your machine.
- Expo CLI (recommended for React Native development).

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/praveenbabuspb/todo.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd todo
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the app using Expo**:
   ```bash
   npm start
   ```

This will open a new page in your browser with a QR code. Scan the QR code with the **Expo Go app** (available on iOS/Android) to view the app on your mobile device.

---

## Technologies Used
- **React Native**: The core framework for building the app.
- **React Navigation**: For managing screen navigation.
- **React Native Paper**: A Material Design library for React Native, used for UI components.
- **AsyncStorage**: Used to persist data across app sessions.
- **Expo**: A framework and platform for universal React applications.

---

## Screenshots

![Todo List](https://via.placeholder.com/400x800.png)
*Todo List Screen*

![Completed Tasks](https://via.placeholder.com/400x800.png)
*Completed Tasks Screen*

---

## Future Improvements

- **Push Notifications**: Add push notifications for task reminders.
- **User Authentication**: Integrate user login/registration (using Firebase or similar).
- **Cloud Sync**: Sync tasks across devices using Firebase Firestore.
  
---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React Native Documentation](https://reactnative.dev/docs/getting-started) – for helping with React Native setup.
- [React Navigation Documentation](https://reactnavigation.org/) – for navigation setup.
- [React Native Paper Documentation](https://callstack.github.io/react-native-paper/) – for UI components.
```

Make sure to replace the placeholder images in the screenshots section with actual screenshots of your app or remove that section if you prefer not to include them. You can also customize the repository link and add any additional instructions if needed.
