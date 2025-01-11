import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../hooks/useTask';
import useThemeColor from '../hooks/useThemeColor';

const CompletedTasks = () => {
  const { completedTasks } = useTasks();
  const { background, text } = useThemeColor();

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default CompletedTasks;
