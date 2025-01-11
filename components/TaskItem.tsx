import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';
import { useTasks } from '../hooks/useTask';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const TaskItem = ({ task }: { task: Task }) => {
  const { deleteTask, toggleTaskCompletion } = useTasks();

  return (
    <View style={styles.taskContainer}>
      <Checkbox
        status={task.completed ? 'checked' : 'unchecked'}
        onPress={() => toggleTaskCompletion(task.id)}
      />
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.name}
      </Text>
      {!task.completed && (
        <IconButton
          icon="delete"
          size={20}
          onPress={() => deleteTask(task.id)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskItem;
