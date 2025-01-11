import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/TaskInput';
import { useTasks } from '../hooks/useTask'; // Ensure this path is correct and the module exists
import useThemeColor from '../hooks/useThemeColor'; // Corrected import

const TodoList = () => {
  const { tasks, addTask, searchTasks, setSearchQuery } = useTasks();
  const [search, setSearch] = useState('');
  const { background, text, tint } = useThemeColor(); // Using colors from the hook

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Searchbar
        placeholder="Search tasks"
        value={search}
        onChangeText={(query: string) => {
          setSearch(query);
          setSearchQuery(query);
        }}
        style={[styles.searchbar, { backgroundColor: tint }]} // Use tint color for searchbar
      />
      <FlatList
        data={searchTasks(search) || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
      <TaskInput addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    marginBottom: 16,
  },
});

export default TodoList;
